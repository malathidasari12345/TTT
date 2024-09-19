const mongoose = require("mongoose")

const user = new mongoose.Schema({
    username :{
        type : String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select :false
    },
    createdAt :{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('tttuser',  user);