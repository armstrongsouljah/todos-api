const User = require('../models/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const {SECRET_KEY} = process.env

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

const userLogin = async (data) => {
   const {error} = await userSchema.validate(data);
   if(error) return {error}
   const {username, password} = data;
   const user = await User.findOne({username})
   
   if(!user) {
       return {error: {
           message: "User not exist"
       }}
   }

   const passwordMatched = await bcrypt.compare(password, user.password);

   if(passwordMatched) {
       console.log('logged in ', passwordMatched)
       const token = jwt.sign({
           username
       }, SECRET_KEY, {
           expiresIn:"1 day"
       })
       return{
           data: {
            message: "Successfully logged in",
            token,
            user
        }
       } 
   } else {
       return {
           error: {
               message: "Invalid username/password."
           }
       }
   }
}

module.exports = {
    registerUser,
    userLogin
}
