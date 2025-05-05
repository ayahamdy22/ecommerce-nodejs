const express = require("express");
const { getAllProduct, createProduct } = require("../controllers/products");

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", createProduct);

module.exports = router;
