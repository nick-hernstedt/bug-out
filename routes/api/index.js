const router = require("express").Router();
const bugRoutes = require("./bugs");

// Bug routes
router.use("/bugs", bugRoutes);
router.use("/users", require("./users"))

module.exports = router;
