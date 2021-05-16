import express from "express"
import connectDB from './config/db.js'
import dotenv from 'dotenv' 

import router from './routes/productRoutes.js'
dotenv.config()

connectDB()
const app = express()

app.use('/api', router)

const PORT = process.env.PORT || 2000

app.listen(PORT, console.log(`Server is starting at ${PORT}`.yellow.bold));







