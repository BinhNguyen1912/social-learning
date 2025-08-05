import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async (): Promise<void> => {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI not found');

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'Ucademy',
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};
