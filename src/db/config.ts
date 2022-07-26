import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
dotenv.config();
const uri: any = process.env.MONGO_CNN;

export const dbConnection = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error in the db ignite");
  }
};
