const mongoose = require("mongoose");

const productSchema = new mongoose.schema(
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
    freature_1: { type: String },
    freature_2: { type: String },
    freature_3: { type: String },
    freature_4: { type: String },
    image_1: {
      type: String,
      require: true,
    },
    image_2: {
      type: String,
      require: true,
    },
    image_3: {
      type: String,
      require: true,
    },
    image_4: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
