const User = require('../models/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const userSchema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
})

const registerUser = async (data) => {
   const {error} = await userSchema.validate(data);
   if(error) {
       return {error}
   } 
   const userExists = await User.findOne({username: data.username})
    if(userExists) {
        return {
            error: {
                message: "User already exists"
            }
        }
    } else {
        const hashedPassword = await bcrypt.hash(data.password, 10)
        data.password = hashedPassword;
        let user = await User.create({
            ...data })
        return {user};
    }
}

module.exports = {
    registerUser
}
