const {Schema,model} = require('mongoose');

let employeSchema = new Schema({
    name:{
        required : {value:true, message:"name is mandatory"},
        type:String
    },
    age:{
        required : 
        {value:true, message:"age is mandatory"},
        type:String
    },
    designation:{
        required : {value:true, message: "designation is mandatory"},
        type:String
    },
    gender:{
        
        type:String
    },
    mobile:{

        required : {value:true, message: "mobile is mandatory"},
        type:String,
        minlength:[10, "mobile should have 10 digits"]
    },
    email:{
        required : {value:true, message:"email is mandatory"},
        type:String
    },
    // password:{
    //     required:{value:true, message:"password is mandatory"},
    //     minlength:[10,"password should have 10 digits"]
    // },
    // confirmpassword:{
    //     required:{value:true, message:"confirm password is mandatory"},
    //     minlength:[10,"confirm password should have is mandatory"]
    // }
    

    
}, { timestamps: true })


module.exports=model('employe',employeSchema)