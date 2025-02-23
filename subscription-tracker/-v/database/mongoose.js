import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define DB_URI variable in you .env.<development/production>.local file"
  );
}

const connectToDatabase = async () => {
  try {
    console.log(DB_URI);
    await mongoose.connect(DB_URI);
    console.log(`Connected to Database in ${NODE_ENV}_mode`);
  } catch (error) {
    console.log("Error Connecting To Database:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
