const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistTokenModel')
const captainModel = require('../models/captainModel')

module.exports.authUser = async(req,res,next)=>{
    const token =  req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message: 'unathorized'})
    }
    const isBlackListed = await blacklistTokenModel.findOne({token: token})
    if(isBlackListed){
        return res.status(401).json({message: 'unauthorized'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)
        
        req.user = user
        return next()
    } catch (err) {
        return res.status(401).json({message: 'unathorized'})
    }

}

module.exports.authCaptain = async(req,res,next)=>{
    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(401).json({message: 'unathorized'})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token})
    if(isBlacklisted){
        return res.status(401).json({message: 'unathorized'})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain
        return next()
    }catch(err){
        return res.status(401).json({message: 'unathorized'})
    }
}