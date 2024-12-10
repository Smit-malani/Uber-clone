const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const blacklistToken = new mongoose.Schema({
    token: {
        type: String,
        require: true,
        unique: true
    },
    creaedAt:{
        type: Date,
        default: Date.now,
        expires: 86400 //24 hourse
    }
})

module.exports = mongoose.model('BlacklistToken',blacklistToken)