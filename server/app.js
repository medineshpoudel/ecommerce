const express = require("express");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const connectDB = require("./configs/db.config");
const dotenv = require("dotenv");
dotenv.config();
connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/product", productRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on the port ${PORT}`);
});

module.exports = app;
