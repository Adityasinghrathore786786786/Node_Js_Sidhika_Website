const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },

    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email id")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    commentQuery:{
        type:String,
        required:true,
        minLength:5
    },
    date:{
        type:Date,
        default:Date.now
    }

})


//create a collection

const User = mongoose.model("user", userSchema )

module.exports = User;
