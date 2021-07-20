const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    joinedAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('user', userSchema, 'users')
module.exports = User;
