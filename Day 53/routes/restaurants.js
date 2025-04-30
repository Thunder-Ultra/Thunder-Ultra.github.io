const uuid = require("uuid");
const resData = require("./../util/restaurants-data");

const express = require("express");

const router = express.Router();

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.get("/restaurants", function (req, res) {
  let order = req.query.order;
  let nextOrder = "desc";

  if (order != "asc" && order != "desc") {
    order = "asc";
  }

  if (order == "desc") {
    nextOrder = "asc";
  }

  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.sort(function (resA, resB) {
    if (
      (order == "asc" && resA.name > resB.name) ||
      (order == "desc" && resB.name > resA.name)
    ) {
      return 1; // Swap the two restaurants
    } else {
      return -1; // Don't swap the two restaurants
    }
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder
  });
});

router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;
  const storedRestaurants = resData.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", {
        restaurant: restaurant,
      });
    }
  }

  res.status(404).render("404");
});

router.get("/about", function (req, res) {
  res.render("about");
});

router.post("/recommend", function (req, res) {
  // Restaurant Submission route
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.push(restaurant); // Update the existing Data

  resData.storeRestaurants(storedRestaurants);

  res.redirect("/confirm");
});

module.exports = router;
