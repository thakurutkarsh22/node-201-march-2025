const express = require("express");
const { getAllUsers, getUsersByGender, getUserByID } = require("../Controllers/UserActivityController");
const VerifyAUthentication = require("../Middlewares/LoginMiddleware");
const router = express.Router();


router.get("/", VerifyAUthentication , getAllUsers);
router.get("/searchs", VerifyAUthentication, getUsersByGender);
router.get("/:uuid", getUserByID);   


module.exports = router;
