const dotenv = require('dotenv')
dotenv.config()
const express =require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const connectToDB = require('./db/db')
const userRoutes = require('./routes/userRoutes')
const captainRoutes = require('./routes/captainRoutes')
connectToDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("hello word")
})

app.use('/users', userRoutes)

app.use('/captain',captainRoutes)

module.exports = app