const express = require("express");
const mongooseConfig = require("./config/mongodb");

const server = express();

mongooseConfig.connect();

server.listen(3300);



server.get("/",(req, res)=>{
    res.send("Welcome to Mongoose");
});