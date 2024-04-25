const express = require("express");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const connectDB = require("./configs/db.config");
const dotenv = require("dotenv");
var cors = require("cors");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middlewares/requireAuth");

const { notFoundHandler, errorHandler } = require("./middlewares/errorHandler");
dotenv.config();
connectDB();

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }

    // Check if the origin is allowed
    if (
      origin === "http://127.0.0.1:5174" ||
      origin === "http://localhost:8000"
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", authRoutes);

app.use(requireAuth);
app.use("/product", productRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on the port ${PORT}`);
});

module.exports = app;
