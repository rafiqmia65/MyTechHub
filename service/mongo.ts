import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("✅ MongoDB connection already established");
    isConnected = true;
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
      bufferCommands: false,
    });
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    throw error;
  }
};
