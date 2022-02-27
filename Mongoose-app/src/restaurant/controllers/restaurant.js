const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant");


exports.add = async (req, res)=>{
    const newRestaurant = new Restaurant(req.body);
    const result = await repo.add(newRestaurant);
    res.status(200).send(result);
}