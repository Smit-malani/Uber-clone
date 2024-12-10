const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlenght:[3,'first name al leat three characters long']
        },
        lastname:{
            type: String,
            minlenght:[3,'last name al leat three characters long']
        }
    },
    email:{
        type:String,
        required: true,
        unique: true,
        minlenght: [5,'email must be at least 5 character long']
    },
    password:{
        type: String,
        required: true,
        select:false
    },
    socketId:{ // for live tracking, for tracking driver or caption live location tracking
        type:String
    }
})


// creating method on userSchema, function name is generateAuthToken, comparePaaaword and hashPassword
userSchema.methods.generateAuthToken = ()=>{
    //To generate JWT token
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async(password)=>{
    //This used when user login, comparing password
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async (password)=>{
    // this used when user register, hashing password for 10 times.
    return await bcrypt.hash(password,10)
}

// create model for user which store in DB name with user
const userModel = mongoose.model('user',userSchema)

module.exports = userModel