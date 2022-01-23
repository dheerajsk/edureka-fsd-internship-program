const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant");

// Trying to add restaurant
exports.addRestaurant = (req, res)=>{
    console.log(req.body);
    const newRestaurant = 
    new Restaurant(null, req.body.name, 
        req.body.location, req.body.website, req.body.contact);
    repo.add(newRestaurant, ()=>{
        res.send("Data added");
    })
}