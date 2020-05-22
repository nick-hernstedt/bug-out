const router = require("express").Router();
const bugsController = require("../../controllers/bugController");


router.route("/")
  .get(bugsController.findAll)
  .post(bugsController.create);


router.route("/:id")
  .get(bugsController.findById)
  .put(bugsController.update)
  .delete(bugsController.remove);

module.exports = router;