"use strict";

let socket = io(); //initiates a request from the client to the server to open a websocket and keep it open
            
socket.on('connect',()=>{
    console.log('Connected to server.');
    socket.emit("getEmail",{
        to:"abc@dummy.org",
        text:"Hello there"
    });
});

socket.on('disconnect',()=>{
    console.log('Disconnected from server.');
});

socket.on('newEmail',(email)=>{
    console.log("New Email Received",email);
});