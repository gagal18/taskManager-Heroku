const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a task'],
        trim: true,
        maxlength: [20, 'Task cant be more than 20 charachters']
    },
    completed: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model('Task', TaskSchema)