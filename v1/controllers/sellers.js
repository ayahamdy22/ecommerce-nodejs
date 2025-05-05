const sellerModel = require("../models/seller");
const { catchAsync } = require("../utils/catchAsync");

exports.save = catchAsync(async (req, res) => {
  let seller = await sellerModel.create(req.body);
  res.status(200).json({
    status: "success",
    data: seller,
  });
});
