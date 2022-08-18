const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    todo:{
        type:String,
        reqired:true
    },
    date:{
        type:Date,
        default: Date.now
        
    }
})
module.exports = mongoose.model('TaskSchema',TaskSchema);