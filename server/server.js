"use strict";

const path = require("path");
const express = require("express");
const http = require('http');
const socketIO = require('socket.io');

const app = express();

const port = process.env.PORT||3000;

let publicPath = path.join(__dirname,"../public");
let server = http.createServer(app);
let io = socketIO(server);
//middleware --> helps serve up the public folder
app.use(express.static(publicPath));

console.log(publicPath);

io.on('connection',(socket)=>{
    console.log("New user connected.");
    socket.on('disconnect',(socket)=>{
        console.log('User disconnected');
    });
});
server.listen(port,()=>{
    console.log(`Successfully connected to port ${port}`);
});

