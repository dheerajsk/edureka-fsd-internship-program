// 1. Import express.
const express = require("express");
const bodyParser = require("body-parser");

// Import routes
const restaurantRoutes = require("./restaurant/routes/api_restaurant");

// 2. Creating a server
const server = express();

// 3. Assigning port to server
server.listen("3200");

// 5. Handle api requests
// Parsing request body for all requests
server.use(bodyParser.json());
// server.use method takes all request methods
server.use("/api/restaurant", restaurantRoutes);

// 4. Handle default request from client
server.get("/", (req, res)=>{
    res.send("Hello from Express");
})



console.log("Express is listening on 3200");