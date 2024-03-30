const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const db = require("./db");
const path = require("path");

//Routes
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const feedbackRoutes = require("./src/routes/feedbackRoute");
const verifyUser = require("./src/middleware/authMiddleware");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, OPTIONS, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    " Accept, Accept-Version, Content-Length, Content-Type, Date, Authorization"
  );
  if (req.method === "OPTIONS") {
    return res.status(200).json({
      body: "OK",
    });
  }
  next();
});

app.use(express.json());
app.get("/health", (req, res) => {
  res.json({
    service: "Job listing server",
    status: "Active",
  });
});

app.use("/public", express.static(path.join(__dirname, "src", "uploads")));
console.log(path.join(__dirname, "src", "uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", verifyUser, cartRoutes);
app.use("/api/order", verifyUser, orderRoutes);
app.use("/api/feedback", verifyUser, feedbackRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
