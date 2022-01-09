
// We need to create nodejs server(http)
// HTTP (Hyper Text Transafer Protocol)
// - Allows communication between client and server
// - Transfer data between client and server

// Importing HTTP Package

// Types of Packages/Libs
// 1. Packages of Core Module
// 2. Pckages from NPM

const http = require("http");

// Creating server using http protocol
// Server should have ports
http.createServer((req, res)=>{
    res.end("Hello world from NodeJS");
}).listen(3200);

console.log("Server is listening on 3200");