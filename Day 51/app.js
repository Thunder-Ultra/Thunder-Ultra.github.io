const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const uuid = require('uuid');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public")); // make all the files stored in public folder be available directly
app.use(express.urlencoded({ extended: false })); // Automatically parse the form data

app.get("/", function (req, res) {
  // const htmlFilePath = path.join(__dirname,"views","index.html")
  // res.sendFile(htmlFilePath);
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.get("/restaurants", function (req, res) {
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:id", function(req, res){

  const restaurantId = req.params.id;
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  for (const restaurant of storedRestaurants){
    if (restaurant.id === restaurantId){
      return res.render("restaurant-detail", {restaurant: restaurant});
    }
  }
  
  res.render("404");
})

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/recommend", function (req, res) {
  // Restaurant Submission route
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant); // Update the existing Data

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});


app.listen(3000);
