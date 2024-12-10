const userModel = require('../models/userModel')

// use for creating user in DB
module.exports.createUser = async({
    firstname,lastname,email,password
})=>{
    if(!firstname|| !email || !password){
        throw new Error('all field are requires')
    }
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user
}