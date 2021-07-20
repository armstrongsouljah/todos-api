const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    is_active: {
        type: Boolean,
        default: true
    }
});

userSchema.pre('save', async (doc, next)=> {
   doc.password = await bcrypt.hash(doc.password, 10);
   next()
})

const User = mongoose.model('user', userSchema, 'users')
module.exports = User;
