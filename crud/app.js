require('dotenv').config()

const connectToDB = require('./db/index.js')
const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.routes.js')
connectToDB()
const app = express();
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use('/',userRoutes)
//middlewares



module.exports = app;