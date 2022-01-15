// 1. Import express.
const express = require("express");

// 2. Creating a server
const server = express();

// 3. Assigning port to server
server.listen("3200");

// 4. Handle default request from client
server.get("/", (req, res)=>{
    res.send("Hello from Express");
})



console.log("Express is listening on 3200");