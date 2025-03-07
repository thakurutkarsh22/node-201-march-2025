const express = require("express");
const { getAllUsers, getUsersByGender, getUserByID } = require("../Controllers/UserActivityController");
const router = express.Router();


router.get("/", getAllUsers);
router.get("/searchs", getUsersByGender);
router.get("/:uuid", getUserByID);   


module.exports = router;
