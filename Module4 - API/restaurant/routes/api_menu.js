const express = require("express");

const router = express.Router();
const controller = require("../controllers/menu");

// api/menu - POST
router.post("/", controller.add)
router.get("/restaurant/:id", controller.getByRestaurantID);

module.exports = router;