const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(CONNECTION_STRING);
    console.log(`Database connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
