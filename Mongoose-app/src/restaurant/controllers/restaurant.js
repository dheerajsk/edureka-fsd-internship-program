const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant");


exports.add = async (req, res)=>{
    console.log(req.payload);
    const newRestaurant = new Restaurant(req.body);
    const result = await repo.add(newRestaurant);
    res.status(200).send(result);
}

exports.getAll = async (req, res)=>{
    const result = await repo.getAll();
    res.status(200).send(result);
}