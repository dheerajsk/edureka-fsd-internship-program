const express = require("express");
const mongooseConfig = require("./config/mongodb");
const menuRoutes = require("./src/restaurant/routes/menu");
const restaurantRoutes = require("./src/restaurant/routes/restaurant");
const bodyParser = require("body-parser");
const userRoutes = require("./src/restaurant/routes/user");
const auth = require("./src/middlewares/auth");

const server = express();

mongooseConfig.connect();

server.listen(3300);
server.use(express.json());

server.use("/api/restaurant", auth, restaurantRoutes);
server.use("/api/menu", menuRoutes);
server.use("/api/user", userRoutes);


server.get("/",(req, res)=>{
    res.send("Welcome to Mongoose");
});