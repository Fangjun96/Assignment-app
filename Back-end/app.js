const express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv') 
dotenv.config()
const app = express()

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology:true})

app.use('/api', require('./routes'))

app.listen(2000, console.log(`Server is starting at 2000`));







