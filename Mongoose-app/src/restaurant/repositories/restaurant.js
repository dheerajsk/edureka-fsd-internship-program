const Restaurant = require("../models/restaurant");


exports.add = async (restaurant)=>{
    try{
       const result = Restaurant.create(restaurant);
       return result;
    }catch(err){
        console.log(err);
    }
}

exports.getAll = async()=>{
    const result = await Restaurant.aggregate(
        [
           {
               $lookup:{
                   from: "menus",
                   localField: "_id",
                   foreignField : "restaurantID",
                   as : "_menus"
               }
           }
        ]
    );
    return result;
}