const MenuModel = require("../models/menu");

const repo = require("../repositories/menu");

// 1. Add Menus in restaurant

module.exports.add = (req, res)=>{
    const body = req.body;
    const newMenu = new MenuModel(body.name, body.price, body.type,
        body.restaurantID, body.detail, body.imageURL, body.isVeg);
    repo.add(newMenu, ()=>{
        res.status(200).send("Menu is created");
    })
}

module.exports.getByRestaurantID=(req, res)=>{
    const restaurantID=req.params.id;
    repo.getByRestaurantID(restaurantID, (menus)=>{
        res.status(200).send(menus);
    })
}

// 2. Get menus of restaurants.
