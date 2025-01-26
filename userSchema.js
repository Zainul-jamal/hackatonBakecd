const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    cnic:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    }
    
   
},{timeStamp:true})

const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel;