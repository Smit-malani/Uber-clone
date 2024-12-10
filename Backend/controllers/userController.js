const userModel = require('../models/userModel')
const userService = require('../services/userServices')
const {validationResult} = require('express-validator')

// exporting registerUser controll to userRotes.
module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname, email, password} = req.body
    const hashPassword = await userModel.hashPassword(password)
    const user =await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password : hashPassword
    })
    
    const token = user.generateAuthToken()
    res.status(201).json({token, user})
}