const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
  description :{
    type :String,
    required : true
  },
    iscompleted: {
        type: Boolean,
        default: false
    },
    createdAt :{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('tttTask', Schema);
