// src/lib/mongodb.ts
import mongoose from 'mongoose'

// const MONGODB_URI = process.env.DB_URL;

if (!process.env.DB_URL) {
    throw new Error(" please define mongo environment variable")
}

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) {
        return mongoose;
    }
    const opts = {
        bufferCommands: false,
    }
    await mongoose.connect(process.env.DB_URL, opts);
    return mongoose;
}

export default connectToDatabase;