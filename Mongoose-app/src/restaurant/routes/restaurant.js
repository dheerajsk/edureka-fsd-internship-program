
const express = require("express");
const controller = require("../controllers/restaurant");

const router = express.Router();

router.post("/", controller.add);
router.get("/", controller.getAll);

module.exports = router;