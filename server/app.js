const express = require("express");
const authRoutes = require("./routes/auth");
const connectDB = require("./configs/db.config");
connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", authRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on the port ${PORT}`);
});

module.exports = app;
