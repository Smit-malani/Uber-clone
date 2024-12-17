const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const RideController = require('../controllers/RideController')
const authMiddlewar = require('../middlewar/authMiddlewar')

router.post('/create',
    authMiddlewar.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['car', 'moto', 'auto']).withMessage('Invalid vehical type'),

    RideController.createRide
)

module.exports = router