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

app.use(
  cors({
    allowedHeaders: [
      "Authorization",
      "refresh_token",
      "cart_code",
      "Content-Type",
      "Accept",
      "responsetype",
    ],
    origin: [
      "https://godam-backend.onrender.com",
      "http://127.0.0.1:3000",
      "http://localhost:8000",
      "http://localhost:3000",
    ],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  }),
);

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
