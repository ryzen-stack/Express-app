const express = require('express');
const emprouter = require('./routes/employe.routes');
const userRouter = require('./routes/user.routes');
const connectdb = require('./db/connect');
const cors = require('cors');
require('dotenv').config();

let app = express()

app.use(express.json())

app.use(cors())
app.use('/employe',emprouter)

app.use('/users',userRouter)

app.all('*',(req,res,next)=>{
    res.status(404).json({error:true,message:"page not found"})
    
})
app.use((err,req,res,next)=>{
    res.status(500).json({ error: true, message: err.message })
})

let startserver = async () =>{
    try{
        await connectdb(process.env.LOCAL_URL)
        console.log("mongodb connected successfully")
        app.listen(process.env.PORT,()=>{
            console.log("server")
        })
    }
    catch(err){
        console.log(err)
    }
}
startserver()


