const express = require("express");
const { userSignup, login } = require("../Controllers/AuthController");

const router = express.Router();


// Signup - create new user
router.post("/signup",  userSignup );
router.post("/login",  login );




module.exports = router;
