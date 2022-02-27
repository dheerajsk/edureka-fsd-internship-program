
const express = require("express");
const controller = require("../controllers/restaurant");

const router = express.Router();

router.post("/", controller.add);

module.exports = router;