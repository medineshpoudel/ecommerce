const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./configs/db.config");
var cors = require("cors");
const corsOptions = require("./configs/corsOptions");
const requireAuth = require("./middlewares/requireAuth");
const authRoutes = require("./routes/auth");
const vendorRoutes = require("./routes/vendor/routes");
const adminRoutes = require("./routes/admin/routes");
const userRoutes = require("./routes/user/routes");

const { notFoundHandler, errorHandler } = require("./middlewares/errorHandler");

dotenv.config();
connectDB();

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/", userRoutes);
app.use("/vendor", vendorRoutes);
app.use("/admin", adminRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on the port ${PORT}`);
});

module.exports = app;
