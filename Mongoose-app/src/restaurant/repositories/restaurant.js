const Restaurant = require("../models/restaurant");


exports.add = async (restaurant)=>{
    try{
       const result = Restaurant.create(restaurant);
       return result;
    }catch(err){
        console.log(err);
    }
}