// 1. Import express.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const restaurantRoutes = require("./restaurant/routes/api_restaurant");
const menuRoutes = require("./restaurant/routes/api_menu");
const mongodb = require("./config/mongodb");

mongodb.connect();

// 2. Creating a server
const server = express();
server.use(cors());
// 3. Assigning port to server
server.listen("3100");

// 5. Handle api requests
// Parsing request body for all requests
server.use(bodyParser.json());
// server.use method takes all request methods
server.use("/api/restaurant", restaurantRoutes);
server.use("/api/menu", menuRoutes);

// 4. Handle default request from client
server.get("/", (req, res)=>{
    res.send("Hello from Express");
})



console.log("Express is listening on 3200");