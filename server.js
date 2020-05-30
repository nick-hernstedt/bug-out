const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bugsController = require("./controllers/bugController");
const router = require("express").Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.use(passport.initialize());

app.use(passport.session());

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
); // session secret

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bugCollection"
);

// Define any API routes before this runs
app
  .route("/api/")
  .get(bugsController.findAll)
  .post((req, res) => {
    bugsController.create(req, res);
  });

app
  .route("/api/:id")
  .get(bugsController.findById)
  .put(bugsController.update)
  .delete(bugsController.remove);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
