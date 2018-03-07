"use strict";

let today = new Date();
let date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
let time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();


let generateMessage = (from,text) => {
    return {
        from,
        text,
        createdAt: date+" "+time+"Hrs"
    };
};

module.exports = {generateMessage};