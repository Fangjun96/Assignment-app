import mongoose from 'mongoose'
import color from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTIONSTRING, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan)
    }catch(error){
        console.error(`Error: ${error.message}`.red.bold)
        process.exit(1)
    }
}

export default connectDB