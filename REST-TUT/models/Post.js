const mongoose = require('mongoose');

//create schema- how post data looks like 
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    } ,
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Posts',PostSchema)