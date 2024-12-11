const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const captainController = require('../controllers/captainController')
const authMiddlewar = require('../middlewar/authMiddlewar')

router.post('/register',[
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('password must have 6 charachter'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 character long'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehical type')
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must have 6 charachter')
],
    captainController.loginCaptain
)

router.get('/profile',authMiddlewar.authCaptain, captainController.getCaptainProfile)

router.get('/logout',authMiddlewar.authCaptain,captainController.logOutCaptain)


module.exports = router