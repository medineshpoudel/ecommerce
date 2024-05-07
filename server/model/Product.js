const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    actualPrice: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    productType: {
      type: [String],
      required: true,
      enum: ["Laptop", "Mobile", "Headphone"],
    },
    feature_1: { type: String, required: true },
    feature_2: { type: String, required: true },
    feature_3: { type: String, required: true },
    feature_4: { type: String, required: true },
    image_1: {
      type: String,
      required: true,
    },
    image_1: {
      type: String,
      required: true,
    },
    image_2: {
      type: String,
      required: true,
    },
    image_3: {
      type: String,
      required: true,
    },
    image_4: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
