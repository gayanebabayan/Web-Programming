/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: GAYANE BABAYAN Student ID: 107-061-160 Date: 7-SEPT-2018
*
* Online (Heroku) URL: _______________________________________________________
*
********************************************************************************/ 


var express = require ("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

app.get ("/", function (req,res) {
    res.send ("Gayane Babayan 107-061-160");
});


app.listen (HTTP_PORT, function(){
    console.log("server listening on:" + HTTP_PORT);
});