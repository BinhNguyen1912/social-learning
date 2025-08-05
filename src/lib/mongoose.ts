import mongoose from 'mongoose';
import envConfig from '@/config';

export const connectToDatabase = async () => {
  if (!envConfig.MONGODB_URL) {
    throw new Error('MONGODB_URL is not defined');
  }

  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    return await mongoose.connect(envConfig.MONGODB_URL, {
      dbName: envConfig.DB_NAME,
    });
    console.log('Connected to new MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
