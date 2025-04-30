const path = require("path");
const express = require("express");

const defaultRoutes = require("./routes/default");
const restaurantRoutes = require("./routes/restaurants");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public")); // make all the files stored in public folder be available directly
app.use(express.urlencoded({ extended: false })); // Automatically parse the form data

app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);

// Client Side Error handling with proper Status Codes
app.use(function (req, res) {
  res.status(404).render("404");
});

// Server Side Error handling with Proper Status Codes
app.use(function (error, req, res, next) {
  res.status(500).render("500", { error: error });
});

app.listen(3000);
