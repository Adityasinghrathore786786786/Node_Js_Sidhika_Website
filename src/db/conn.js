const mongoose = require('mongoose')

//creating a database connection
mongoose.connect("mongodb://localhost:27017/Nodejs2_web", {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("Connection successful")
}).catch((e)=>{
  console.log(e)
})