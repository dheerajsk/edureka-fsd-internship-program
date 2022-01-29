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

exports.updateRestaurant = (req, res)=>{
    console.log(req.body);
    const restaurantToUpdate = 
    new Restaurant(req.body._id, req.body.name, 
        req.body.location, req.body.website, req.body.contact);
    repo.updateRestaurant(restaurantToUpdate, ()=>{
        console.log("Data Updated");
        repo.getByID(restaurantToUpdate.id, (resutaurant)=>{
            res.send(resutaurant);
        })
    })
}

exports.getAllRestaurants = (req, res)=>{
    repo.getAll((restaurants)=>{
        res.send(restaurants);
    })
}

exports.getRestaurantById = (req, res)=>{
    const id = req.params.id;
    repo.getByID(id, (resutaurant)=>{
        res.send(resutaurant);
    })
}

exports.getRestaurantsByLocation = (req, res)=>{
    const loc = req.params.loc;
    console.log(loc);
    repo.getByLocation(loc, (resutaurant)=>{
        res.send(resutaurant);
    })
}
