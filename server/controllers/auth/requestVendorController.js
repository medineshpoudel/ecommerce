const User = require("../../model/User");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const RequestVendor = require("../../model/RequestVendor");

const requestSignupController = async (req, res, next) => {
  try {
    const { username, email, password, role, phone_no, first_name, last_name } =
      req.body;
    if (
      !username ||
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !role ||
      !phone_no
    ) {
      throw new Error("All fields are required");
    }

    if (!validator.isEmail(email)) {
      throw new Error("Please enter a valid email.");
    }

    if (!validator.isStrongPassword(password)) {
      throw new Error(
        "Password must contain a number, special character, and uppercase letter"
      );
    }

    const existingUser = await RequestVendor.findOne({
      $or: [{ email }, { username }, { phone_no }],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error("User with this email already exists");
      }
      if (existingUser.username === username) {
        throw new Error("User with this username already exists");
      }
      if (existingUser.phone_no === parseInt(phone_no)) {
        throw new Error("User with this phone number already exists");
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await RequestVendor.create({
      ...req.body,
      password: hash,
    });

    res.status(200).json({
      username: newUser.username,
      email: newUser.email,
      role: newUser.role[0],
    });
  } catch (error) {
    next(error); // Pass any caught errors to the error handler middleware
  }
};

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
  requestSignupController,
  getRequestVendorController,
  acceptRequestVendorController,
  rejectRequestVendorController,
};
