import mongoose from 'mongoose'

async function dbConnect() {
    if (mongoose.connection.readyState == 1) {
        return
    }

    const MONGODB_URI = process.env.MONGODB_URI

    if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
    }

    try {
        await mongoose.connect(MONGODB_URI)
    } catch (error) {
        throw new Error('MongoDB connection error')
    }

}

export default dbConnect