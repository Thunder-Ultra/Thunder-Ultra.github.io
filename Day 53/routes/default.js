const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  // const htmlFilePath = path.join(__dirname,"views","index.html")
  // res.sendFile(htmlFilePath);
  console.log("A visitor visited your webpage! "+ req.ip)
  res.render("index");
});

router.get("/about", function (req, res) {
  res.render("about");
});

module.exports = router;
