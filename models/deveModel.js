const mongoose = require('mongoose');

// Developer Schema working start here
const developerModel = mongoose.Schema({
    name : {
        type : String, 
        Required : [true, 'Name field is required']
    },
    skill : {
        type    : String,
        Required : [true, 'Skill field is required']
    },
    age   : {
        type    : Number,
        Required : [true, 'Age field is required']
    }
}, { 
    timestamps : true 
});
// Developer Schema working end here

/**
 * module exports here
 */
module.exports = mongoose.model('Developer', developerModel);