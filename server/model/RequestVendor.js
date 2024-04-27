const mongoose = require("mongoose");

const requestVendor = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: [String],
      required: true,
      enum: ["admin", "user", "moderator"],
      default: ["moderator"],
    },
    status: {
      type: [String],
      required: true,
      enum: ["pending", "accepted", "rejected"],
      default: ["pending"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RequestVendor", requestVendor);
