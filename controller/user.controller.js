const users = require('../model/user.model');
const asyncWrapper = require('../helpers/asyncWrapperFunc');


let RegisterUser = asyncWrapper(async(req,res,next) =>{
    let {FirstName,Lastname,email,mobile,Password,ConfirmPassword} = req.body
    if(Password === ConfirmPassword){
        let userAvail = await users.findOne({ $or: [{mobile}, {email}]})
        if(!userAvail){
            let user = users.create({FirstName,Lastname,email,mobile,Password,ConfirmPassword})
            return res.status(201).json({error:false,message:'user added successfully'})
        }
        return res.status(403).json({error:false,message:'user already exists'})
    } 
    return res.status(401).json({error:false,message:'password did not matched'})  
})

let LogUser = async(req,res,next) =>{
    try {
        let {email,mobile,Password} = req.body
        let userAvail = await users.findOne({ $or: [{mobile}, {email}]})
        if(userAvail){
            if(Password === userAvail.Password){
                return res.status(201).json({error:false,message:'logged successfully'})
            }
             return res.status(401).json({error:true,message:'password is wrong'})
        }
        else{
            return res.status(403).json({error:false,message:'User not exits'})
        }
        
    } catch (err) {
        next(err)
    }

}

module.exports = {RegisterUser,LogUser}