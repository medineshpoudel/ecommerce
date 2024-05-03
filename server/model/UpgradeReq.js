const mongoose = require("mongoose");

const upgradeReqschema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    role: { type: String, enum: ["vendor", "admin"], default: "vendor" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

upgradeReqschema.virtual("users", {
  ref: "User",
  localField: "user",
  foreignField: "_id",
  justOne: true,
});

const upgradeReq = mongoose.model("UpgradeReq", upgradeReqschema);
module.exports = upgradeReq;
