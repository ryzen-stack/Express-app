const employe = require('../model/employe.model');

let addemploye = async (req,res,next) =>{
    try{
        let {name,age,designation,gender,mobile,email,fef} = req.body
        let isUserAvailable = await employe.findOne({$or:[{mobile},{email}]})
        if(isUserAvailable){
            return res.status(201).json({error:true,message:"employe mobile or email already existed"})
        }
        
        let emp = await employe.create({name,age,designation,gender,mobile,email,fef})
        return res.status(201).json({error:false,message:"employee added successfully", data:emp})

    }
    catch(err){
        next(err)

    }
}
let getemployes = async (req,res,next) =>{
    try {
        let allEmp = await employe.find()
        res.status(201).json({error:true,message:"employe all  successfully",data:allEmp})
        
    } 
    catch (err) {
        next(err)
    }
    
}
let getemploye = async (req,res,next) =>{
    try {
        let {pid} = req.params
        let getEmp = await employe.findById(pid)
        if(getEmp){
            return res.status(201).json({error:true,message:"employe one successfully",data:getEmp})
        }
        return res.status(201).json({error:true,message:"employe did not  found"})
        
        
    } catch (err) {
        next(err)
        
    }
    
}
let updateemploye = async (req,res,next) =>{
    try {
        let {pid} = req.params
        let {age} = req.body
        let updateEmp = await employe.findById(pid)
        console.log(updateEmp)
        if(updateEmp){
            let details = await employe.findByIdAndUpdate(pid, {$set:{age}}, { new: true, runValidators: true })
            return res.status(201).json({error:true,message:"employe updated successfully", data:details})

        }
        return res.status(201).json({error:true,message:"employe did not found"})
    } catch (err) {
        next(err)
        
    }
    
}
let deleteemploye = async(req,res,next) =>{
    let {pid} = req.params
    let deletedID = await employe.findById(pid) 
    if(!deletedID){
        return res.status(201).json({error:true,message:"employe did not found"})
    }
    let deletedEmployee = await employe.findByIdAndDelete(pid)
    res.status(201).json({error:true,message:"employe deleted successfully", data:deletedEmployee})
}

module.exports = {addemploye,getemploye,getemployes,updateemploye,deleteemploye}

