const express = require("express");
const { createBLog, getAllBlogs, findByID, deleteByID, editByID, blogsByUser, blogsByTitle, blogsByTitleOrUser } = require("../Controllers/BlogController");
const VerifyAUthentication = require("../Middlewares/LoginMiddleware");
const router = express.Router();



const passport = require("passport");
const authMiddleware = passport.authenticate("jwt", { failureRedirect: '/login', session: false })



router.post("/createnewblog", authMiddleware , createBLog );
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
