import mongoose from 'mongoose';

const dbConnect = async () => {
    const url = process.env.CONNECT_DB;
    try {
        await mongoose.connect(url)
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        
    }
}

export default dbConnect;