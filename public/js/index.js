//client side endpoint -- exposed using io()

"use strict";

let socket = io(); //initiates a request from the client to the server to open a websocket and keep it open
            
socket.on('connect',()=>{
    console.log('Connected to server.');
    // socket.emit("createMessage",{
    //     to:"abc@dummy.org",
    //     text:"Hello there"
    // });
});


socket.on('disconnect',()=>{
    console.log('Disconnected from server.');
});

socket.on('newMessage',(message)=>{
    console.log("New Message Received",message);
});