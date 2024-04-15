const User = require("../../model/User");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const loginController = (req, res) => {
  console.log(req.body);
  const user = User.create({});
  res.send("Login to the app");
};

const signUpController = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Please enter valid email." });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      error:
        "Password must contain a number, special character uppercase letter",
    });
  }

  const userExits = await User.findOne({ email });
  if (userExits) {
    return res.status(400).json({ error: "User already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log("user can be created");
  // const newUser = await User.create({ username, email, password: hash });
};

module.exports = { loginController, signUpController };
