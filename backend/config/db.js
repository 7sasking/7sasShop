import mongoose from 'mongoose'

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.DB_CONNECTION);
        console.log(`Database connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.error(`Error: ${err.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;