const fs = require('fs');
const path = require('path');

const express = require("express");


const app = express();

app.use(express.urlencoded({extended: false}))

app.get("/currenttime", function(req,res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}) // localhost:3000/currenttime

app.get("/", function(req,res) {
  res.send("<form method=POST action='/store-user'><label>Enter Name:</label><input type=text name=username><button>Submit</button></submit></form>");
}) // localhost:3000/

app.post("/store-user", function(req,res){
  let userName = req.body.username;

  const filePath = path.join(__dirname, 'data', 'users.json');

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username Stored!</h1>")
})

app.get("/list-users", function(req, res){
  const filePath = path.join(__dirname, 'data', 'users.json');

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let result='<h2>UserList :</h2><ul>';

  for (let user of existingUsers){
    result += '<li>' + user + '</li>';
  }

  result += '</ul>'

  res.send(result)
})


app.listen(3000);