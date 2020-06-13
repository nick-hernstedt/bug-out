const express = require ("express")
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const bugsController = require("../controllers/bugController");

// API Routes
router.use("/api", apiRoutes);



router.route("/api/bugs")
  .get(bugsController.findAll)
  .post(bugsController.create(req, res));


router.route("/api/bugs/:id")
  .get(bugsController.findById)
  .put(bugsController.update(req, res))
  .delete(bugsController.remove);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
