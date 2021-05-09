const dotenv = require('dotenv') 
dotenv.config({path: '/.env'})
const express = require("express")
const mongoose = require('mongoose')

const app = express()
console.log(require('dotenv').config())
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology:true})
//
app.use('/api', require('./routes'))

app.listen(2000, console.log(`Server is starting at 2000`));







