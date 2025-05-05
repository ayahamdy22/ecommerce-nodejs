const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// const cartRoutes = require("./routes/cart");
// const ordersRoutes = require("./routes/orders");
const productsRoutes = require("./routes/products");
const sellersRoutes = require("./routes/sellers");
// const usersRoutes = require("./routes/users");
const AppError = require("./utils/appError");

dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce-project")
  .then(() => {
    console.log("connect to mongodb");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

app.use("/products", productsRoutes);
app.use("/sellers", sellersRoutes);

// not found
app.use((req, res, next) => {
  next(new AppError(404, "Route Not Found"));
});

// error handling
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: "fail",
    message: err.message || "Try again later!",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started listen port ${port}`);
});
