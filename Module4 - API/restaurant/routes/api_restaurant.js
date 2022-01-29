
// Step 1: Import Express
const express = require("express");
const controller = require("../controllers/restaurant");

// Step 2: Create router
const router = express.Router();

// Step 3: Configure route paths

router.post("/", controller.addRestaurant);
router.get("/", controller.getAllRestaurants);
router.get("/:id", controller.getRestaurantById);

module.exports = router;