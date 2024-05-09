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

module.exports = {
  requestSignupController,
};
