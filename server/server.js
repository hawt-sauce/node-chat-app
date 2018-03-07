//server side endpoint

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
    
    let today = new Date();
    let date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    let time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

    // socket.emit('newMessage',{
    //     from:"dummyclient@abcmail.com",
    //     text:"Hello",
    //     completedAt: date+" "+time+"Hrs"
    // });

    socket.on('createMessage',(newMessage)=>{
        console.log("New Message Received",newMessage);
        io.emit('newMessage',{
            from:newMessage.from,
            text:newMessage.text,
            createdAt: date+" "+time+"Hrs"
        });
    })

    socket.on('disconnect',(socket)=>{
        console.log('User disconnected');
    });
});
server.listen(port,()=>{
    console.log(`Successfully connected to port ${port}`);
});

