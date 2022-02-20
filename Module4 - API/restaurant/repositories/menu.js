
const { ObjectId } = require("mongodb");
const mongodb = require("../../config/mongodb");

exports.add = (item, callback)=>{
    // Step 2: Get the collection.
    const collection = mongodb.getCollection("Menu");
    // Step 3: Add your data to collection.
    collection.insertOne({name:item.name, detail:item.detail, 
        price:item.price, imageURL: item.imageURL,
        type: item.type, isVeg:item.isVeg,
    restaurantID: item.restaurantID})
        .then(()=>{
            callback();
        })
        .catch(err=>{console.log(err)});
}

exports.getByRestaurantID = (restaurantID, callback)=>{
    const collection = mongodb.getCollection("Menu");
    collection.find({restaurantID:restaurantID}).toArray().then(
        (menus)=>{
            callback(menus);
        },
        err=>{
            console.log(err);
        }
    )
}
