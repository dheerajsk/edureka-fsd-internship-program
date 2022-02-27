const express = require("express");
const mongooseConfig = require("./config/mongodb");
const menuRoutes = require("./src/restaurant/routes/menu");
const restaurantRoutes = require("./src/restaurant/routes/restaurant");
const bodyParser = require("body-parser");


const server = express();

mongooseConfig.connect();

server.listen(3300);
server.use(express.json());

server.use("/api/restaurant", restaurantRoutes);
server.use("/api/menu", menuRoutes);


server.get("/",(req, res)=>{
    res.send("Welcome to Mongoose");
});