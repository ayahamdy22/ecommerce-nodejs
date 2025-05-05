const productModel = require("../models/product");
const {catchAsync} = require("../utils/catchAsync");

exports.getAllProduct = catchAsync(async (req, res, next) => {
  let products = await productModel.find().populate("seller");
  res.status(200).json({ message: "success", data: products });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  let newProduct = req.body;
  let product = await productModel.create({
    ...newProduct,
    seller: req.body.seller,
  });
  res.status(200).json({ message: "created", data: product });
});
