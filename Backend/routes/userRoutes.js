const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/userController')
const authMiddlewar = require('../middlewar/authMiddlewar')

//creting route for user registretion page to handle data come from frontend.
router.post('/register',[
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('password must have three charachter')
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage("inavlid email"),
    body('password').isLength({min:6}).withMessage("password not match")
],
    userController.loginUser
)

router.get('/profile',authMiddlewar.authUser,userController.getUserProfile)
router.get('/logout',authMiddlewar.authUser,userController.logoutUser)


module.exports = router