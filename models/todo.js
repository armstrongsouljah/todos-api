const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Todo = mongoose.model('todo', todoSchema, 'todos');
module.exports = Todo;
