var express = require("express");
var router = express.Router();
const users = require("../controllers/users");
const auth = require("../middleware/auth");


router.post("/signup", users.signup);
router.post("/login", users.login);
router.get("/users", auth, users.getAllUsers)
router.delete("/:id", auth, users.deleteUser)



module.exports = router;
