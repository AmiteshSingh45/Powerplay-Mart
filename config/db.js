import mongoose from 'mongoose';

const ConnectDb = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGODB_URI); 

        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error in MongoDB: ${err.message}`);
        process.exit(1);
    }
};

export default ConnectDb;
