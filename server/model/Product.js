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
    feature_1: { type: String },
    feature_2: { type: String },
    feature_3: { type: String },
    feature_4: { type: String },
    // image_1: {
    //   publicId: {
    //     type: String,
    //     require: true,
    //   },
    //   url: {
    //     type: String,
    //     require: true,
    //   },
    // },
    // image_2: {
    //   publicId: {
    //     type: String,
    //     require: true,
    //   },
    //   url: {
    //     type: String,
    //     require: true,
    //   },
    // },
    // image_3: {
    //   publicId: {
    //     type: String,
    //     require: true,
    //   },
    //   url: {
    //     type: String,
    //     require: true,
    //   },
    // },
    // image_4: {
    //   publicId: {
    //     type: String,
    //     require: true,
    //   },
    //   url: {
    //     type: String,
    //     require: true,
    //   },
    // },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
