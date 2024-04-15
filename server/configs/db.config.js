const mongoose = require("mongoose");

const CONNECTION_STRING =
  "mongodb+srv://dineshdb:dinesh21219@cluster0.x6xat.mongodb.net/godam";

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
