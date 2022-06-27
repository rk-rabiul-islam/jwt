const mongoose = require('mongoose');


const adminModel = mongoose.Schema({
    name    : {
        type        : String,
        required    : [true, 'Name field is required']
    },
    email   : {
        type        : String,
        required    : [true, 'Email field is required'],
        unique      : true
    },
    phone   : {
        type        : String,
        required    : [true, 'Phone field is required'],
        unique      : true
    },
    Skill   : {
        type        : String,
        required    : false,
    },
    location : {
        type        : String,
        default     : "Cumilla",
        required    : false
    },
    username : {
        type        : String,
        required    : [true, 'UserName field is required'],
        unique      : true,
        minLength   : 5,
        maxLength   : 12
    },
    password : {
        type        : String,
        required    : [true, 'Password field is required'],
        minLength   : 5
    }

},{ 
    timestamps : true 
});


module.exports = mongoose.model('Admin', adminModel);