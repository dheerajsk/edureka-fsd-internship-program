
// 1. import mongoose.
const mongoose = require("mongoose");

// 2. Create Schema for Restaurant.

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String
    }
);

// restaurants
const user = mongoose.model("User", userSchema);

module.exports = user;