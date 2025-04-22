const fs = require('fs');
const path = require('path')
const express = require('express');

const app = express();

app.get("/", function(req, res){
    const htmlFilePath = path.join(__dirname,"views","index.html")
    res.sendFile(htmlFilePath);
});

app.get("/about",function(req, res) {
    const htmlFilePath = path.join(__dirname,"views","about.html")
    res.sendFile(htmlFilePath);
})

app.get("/confirm",function(req, res) {
    const htmlFilePath = path.join(__dirname,"views","confirm.html")
    res.sendFile(htmlFilePath);
})

app.get("/recommend",function(req, res) {
    const htmlFilePath = path.join(__dirname,"views","recommend.html")
    res.sendFile(htmlFilePath);
})

app.get("/restaurants",function(req, res) {
    const htmlFilePath = path.join(__dirname,"views","restaurants.html")
    res.sendFile(htmlFilePath);
})

app.get("/about",function(req, res) {
    const htmlFilePath = path.join(__dirname,"views","restaurants.html")
    res.sendFile(htmlFilePath);
})

// app.use("<h1 style='align:center; align-item:middle'>File Not Found! <span style='color: red'>404</span></h1>")
// It throws error that app.use() requires a middleware function

app.listen(3000);