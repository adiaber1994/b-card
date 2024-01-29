var express = require("express");
var router = express.Router();
const cards = require("../controllers/cards");
const auth = require("../middleware/auth");

router.get("/", cards.getAll);
router.post("/", auth, cards.add);
router.get("/favs", auth, cards.getUserFavoriteCards);
router.post("/set-favorites/:id", auth, cards.setFavorite);
router.get("/:id", auth, cards.getItem);
router.patch("/:id", auth, cards.edit);
router.delete("/:id", auth, cards.delete);

module.exports = router;
