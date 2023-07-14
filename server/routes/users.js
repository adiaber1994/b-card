var express = require("express");
var router = express.Router();
const users = require("../controllers/users");

router.post("/Signup", users.signup);
router.post("/login", users.login);

module.exports = router;
