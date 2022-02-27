
const mongoose = require("mongoose");

const url = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/restaurantMongooseDB?retryWrites=true&w=majority"



exports.connect = async ()=>{
    try{
        const result = await mongoose.connect(url);
        console.log("Mongoose connected");
    }
    catch(err){
        console.log(err);
    }
}