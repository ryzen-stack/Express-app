const mongoose = require('mongoose');



let connectdb = (url)=>
{
   return mongoose.connect(url)

} 
module.exports = connectdb
