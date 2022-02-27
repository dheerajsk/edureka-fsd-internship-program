
// 1. import mongoose.
const mongoose = require("mongoose");

// 2. Create Schema for Restaurant.

const menuSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        type: String,
        detail: String,
        imageURL: String,
        isVeg: Boolean,
        restaurantID: {type: mongoose.Types.ObjectId, ref: 'Restaurant'}
    }
);

// menus
const menu = mongoose.model("Menu", menuSchema);

module.exports = menu;