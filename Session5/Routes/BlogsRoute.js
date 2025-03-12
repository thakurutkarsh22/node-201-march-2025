const express = require("express");
const { createBLog, getAllBlogs, findByID, deleteByID, editByID } = require("../Controllers/BlogController");
const router = express.Router();


router.post("/createnewblog", createBLog );
router.get("/getAllBlogs", getAllBlogs );
router.get("/getBLog/:id", findByID);
router.delete("/delete/:id", deleteByID);
router.put("/edit/:id", editByID)


module.exports = router;
