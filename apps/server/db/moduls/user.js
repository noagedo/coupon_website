const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
     email: {
    type: String,
    required: true,
    },
    password: {
    type: String,
    required: true,
    },
    phonenumber:{
    type:Number,
    },
    admin: {
    type: Boolean,
    },
 
});

const userModel = mongoose.model("user", User);  


module.exports = {
    User,
    userModel,
  };