var express = require("express");
var router = express.Router();
const cards = require("../controllers/cards");
const auth = require("../middleware/auth");

router.get("/", cards.getAll);
router.get("/:id", auth, cards.getItem);
router.post("/", auth, cards.add);
router.patch("/:id", auth, cards.edit);
router.delete("/:id", auth, cards.delete);
router.get('/favs',auth, cards.getUserFavoriteCards);
router.post('/set-favorites/:id',auth, cards.setFavorite);

module.exports = router;
