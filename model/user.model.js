const {Schema,model} = require('mongoose');


let UserSchema = Schema({
    FirstName:{
        type:String,
        required:{value:true, message:"First name required"},
        minlength:[3,"First name minimum characters should have 6 "]
    },
    Lastname:{
        type:String,
    },
    email:{
        type:String,
        required:{value:true,message:"email is required"}

    },
    mobile:{
        type:Number,
        required:{value:true,message:"mobile is required"}

    },
    Password:{
        type:String,
        required:{value:true, message:"password is required"},
        minlength:[8,"password minimum characters should have 8 "]
    },
    ConfirmPassword:{
        type:String,
        required:{value:true, message:"ConfirmPassword is required"},
        minlength:[8,"ConfirmPassword minimum characters should have 8 "]
    },
    
})

module.exports = model('users',UserSchema)