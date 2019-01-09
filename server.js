const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing body on post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/peloshare");
const db = require("./models");

// Login post route
app.post("/login", function(req, res){
  console.log("login route hit");
  console.log(req.body);
  res.json({loggedIn: true});
})

// All users test route
app.get("/allusers", function(req, res){
  console.log("All users route hit");
  // get all users and send them as JSON blob
  db.User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
