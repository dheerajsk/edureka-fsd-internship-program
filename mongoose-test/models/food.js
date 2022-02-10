const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  vID:{type: mongoose.Schema.Types.ObjectId, ref:'Vitamin'},
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative calories aren't real.");
    },
  },
});

const VitaminSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    }
  });

  
const Food = mongoose.model("Food", FoodSchema);
mongoose.model("Vitamin", VitaminSchema);

module.exports = Food;