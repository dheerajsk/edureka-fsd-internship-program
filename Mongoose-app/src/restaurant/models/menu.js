
// 1. import mongoose.
const mongoose = require("mongoose");

// 2. Create Schema for Restaurant.

const menuSchema = new mongoose.Schema(
    {
        name: {type: String},
        price: Number,
        type: String,
        detail: String,
        imageURL: String,
        isVeg: Boolean,
        restaurantID: {type: mongoose.Types.ObjectId, ref: 'Restaurant'}
    }
);

// menus (This is mongoose standard).
const menu = mongoose.model("Menu", menuSchema);

module.exports = menu;