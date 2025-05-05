const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
  sellerName: {
    type: String,
    required: [true, "sellerName is required"],
    unique: [true, "Seller name must be unique"],
  },

  products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],

  role: {
    type: String,
    enum: ["user", "seller"],
    default: "user",
  },
});

const sellerModel = mongoose.model("Seller", sellerSchema);

module.exports = sellerModel;
