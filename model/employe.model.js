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
        
        type:String,
        default:"male"
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
    fef: {
        type: String,
        required: true,
        enum: {
            values: ["reactjs", "vuejs", "angularjs"],
            message: "Only reactjs,vuejs, angularjs  are allowed"
        }
    }
}, { timestamps: true })


module.exports=model('employe',employeSchema)