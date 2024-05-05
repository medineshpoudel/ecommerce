const mongoose = require("mongoose");

const productOrderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    orderedById: {
      type: String,
      required: true,
    },
    orderedByName: {
      type: String,
      required: true,
    },
    productCreatedBy: {
      type: String,
      required: true,
    },
    status: {
      type: [String],
      enum: ["Proceed To Delivery", "Reject", "Pending"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProductOrder", productOrderSchema);
