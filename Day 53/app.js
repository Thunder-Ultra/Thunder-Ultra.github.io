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
  const storedRestaurants = getStoredRestaurants();

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:id", function(req, res){

  const restaurantId = req.params.id;
  const storedRestaurants = getStoredRestaurants();

  for (const restaurant of storedRestaurants){
    if (restaurant.id === restaurantId){
      return res.render("restaurant-detail", {
        restaurant: restaurant
      })
    }
  }
  
  res.status(404).render("404")
})

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/recommend", function (req, res) {
  // Restaurant Submission route
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const storedRestaurants = getStoredRestaurants();

  storedRestaurants.push(restaurant); // Update the existing Data

  storedRestaurants(storedRestaurants);

  res.redirect("/confirm");
});

// Client Side Error handling
app.use(function(req, res){
  res.status(404).render("404");
})

// Server Side Error handling
app.use(function(error, req, res, next){
  res.status(500).render("500",{error: error})
})

app.listen(3000);
