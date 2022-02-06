const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant");

const url = require("url");

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

exports.searchRestaurant = (req, res)=>{
    const key = req.params.key;
    console.log(key);
    repo.search(key, (resutaurants)=>{
        res.send(resutaurants);
    })
}

exports.deleteRestaurant = (req, res)=>{
    const id = req.params.id;
    repo.deleteRestaurant(id, ()=>{
        res.send("Restaurant deleted");
    })
}

exports.filterRestaurant = (req, res)=>{
    const params = url.parse(req.url, true).query;
    console.log(params);
    if(!params.name){
        repo.getByLocation(params.location, (resutaurants)=>{
            res.send(resutaurants);
        })
    }
    repo.filterRestaurant(params.location, params.name, (result)=>{
        res.send(result);
    });
}
