const express = require("express");
const { createBLog, getAllBlogs, findByID, deleteByID, editByID, blogsByUser, blogsByTitle, blogsByTitleOrUser } = require("../Controllers/BlogController");
const router = express.Router();




router.post("/createnewblog", createBLog );
router.get("/getAllBlogs", getAllBlogs );
router.get("/getBLog/:id", findByID);
router.delete("/delete/:id", deleteByID);
router.put("/edit/:id", editByID)

// Get all the blogs by perticualr author 
router.get("/getBlog/user/:email", blogsByUser);
// get blpogs by title
router.get("/getBlog/title/:title", blogsByTitle);

// get blogs by title or author
router.get("/getBlog/titleOrUser/:value", blogsByTitleOrUser);








module.exports = router;
