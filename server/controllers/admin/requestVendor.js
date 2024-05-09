const User = require("../../model/User");
const RequestVendor = require("../../model/RequestVendor");

const getRequestVendorController = async (req, res, next) => {
  try {
    const requestVendor = await RequestVendor.find({});
    res.status(200).json({
      requestVendor,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const acceptRequestVendorController = async (req, res, next) => {
  try {
    const reqId = req.params.id;
    const requestVendor = await RequestVendor.find(
      { _id: reqId },
      "-_id -createdAt -updatedAt -status -__v"
    );
    if (requestVendor && requestVendor?.length === 0) {
      return res.status(404).json({
        error: `No upgrade vendor request found with the id of ${req.params.id}`,
      });
    }
    const userData = {
      username: requestVendor[0].username,
      first_name: requestVendor[0].first_name,
      last_name: requestVendor[0].last_name,
      email: requestVendor[0].email,
      password: requestVendor[0].password,
      phone_no: requestVendor[0].phone_no,
      role: requestVendor[0].role,
    };
    const user = await User.create(userData);

    await RequestVendor.findByIdAndUpdate(reqId, { status: "accepted" });

    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const rejectRequestVendorController = async (req, res, next) => {
  try {
    const reqId = req.params.id;
    const requestVendor = await RequestVendor.find({ _id: reqId });
    if (requestVendor && requestVendor?.length === 0) {
      return res.status(404).json({
        error: `No upgrade Vendor request found with the id of ${req.params.id}`,
      });
    }

    await RequestVendor.findByIdAndUpdate(reqId, { status: "rejected" });

    res.status(200).json({
      success: true,
      message: "Sucessfully deleted the user upgrade request.",
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getRequestVendorController,
  acceptRequestVendorController,
  rejectRequestVendorController,
};
