const express = require("express");
const { userSignup } = require("../Controllers/AuthController");

const router = express.Router();


// Signup - create new user
router.post("/signup", userSignup );




module.exports = router;
