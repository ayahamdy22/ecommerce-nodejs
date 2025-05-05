const express = require("express");
const { save } = require("../controllers/sellers");

const router = express.Router();

router.post("/", save);

module.exports = router;
