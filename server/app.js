const express = require("express");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const connectDB = require("./configs/db.config");
const dotenv = require("dotenv");
var cors = require("cors");
const { notFoundHandler, errorHandler } = require("./middlewares/errorHandler");
dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/product", productRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on the port ${PORT}`);
});

module.exports = app;
