var express = require("express");
var router = express.Router();
const vacations = require("../controllers/card");
const auth = require("../middleware/auth");

router.get("/", Cards.getAll);
router.get("/:id", auth, vacations.getItem);
router.post("/", auth, vacations.add);
router.patch("/:id", auth, vacations.edit);
router.delete("/:id", auth, vacations.delete);

module.exports = router;
