const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const bugsController = require("../../controllers/bugController");

// API Routes
// router.use("/api", apiRoutes);



router.route("/api/")
  .get(bugsController.findAll)
  .post(bugsController.create);


router.route("api/:id")
  .get(bugsController.findById)
  .put(bugsController.update)
  .delete(bugsController.remove);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;