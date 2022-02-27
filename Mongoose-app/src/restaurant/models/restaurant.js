
// 1. import mongoose.
const mongoose = require("mongoose");

// 2. Create Schema for Restaurant.

const restaurantSchema = new mongoose.Schema(
    {
        name: String,
        location: String,
        website: String,
        contact: String
    }
);

// restaurants
const restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = restaurant;