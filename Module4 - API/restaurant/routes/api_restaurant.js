
// Step 1: Import Express
const express = require("express");
const controller = require("../controllers/restaurant");

// Step 2: Create router
const router = express.Router();

// Step 3: Configure route paths

router.get("/Filter", controller.filterRestaurant);
router.post("/", controller.addRestaurant);
router.get("/", controller.getAllRestaurants);
router.get("/location/:loc", controller.getRestaurantsByLocation);
router.get("/:id", controller.getRestaurantById);
router.put("/", controller.updateRestaurant);
router.delete("/:id", controller.deleteRestaurant);
router.get("/search/:key", controller.searchRestaurant)

module.exports = router;