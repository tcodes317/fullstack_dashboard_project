import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv";

dotenv.config("./../.env")

export const connectDB=async () => {
  try{
    console.log("mongo_url: ", process.env.db_user);
    const conn=await mongoose.connect(process.env.db_user);
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  }
  catch(error){
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1) // 1 is failure, 0 status code is success
  }
}