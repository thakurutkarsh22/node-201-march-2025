const { equal } = require("joi");
const BlogModels = require("../Database/Models/Blog.models");
const BlogService = require("../Services/BlogService");


async function createBLog (req, res) {
    const body = req.body;
    const title = body.title;
    const content = body.content;
    const authors = body.author;


    try {
        const response = await BlogService.createBLogServiceFunc(title, content, authors);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json(error);
    }


}

async function getAllBlogs (req, res) {
    try {
        const data = await BlogModels.find({})
        res.status(200).json(data);
    } catch(error) {
        res.status(400).json({message: "could not fetch the blogs"});
    }
}

async function findByID (req, res) {
    const params = req.params;
    const id = params.id;

    try {
        const data = await BlogModels.findById(id)
        res.status(200).json(data);
    } catch(error) {
        res.status(400).json({message: "could not fetch the blogs"});
    }
    
}

async function deleteByID (req, res) {
    const params = req.params;
    const id = params.id;

    try {
        const data = await BlogModels.deleteOne({_id: id})
        res.status(200).json(data);
    } catch(error) {
        res.status(400).json({message: "could not fetch the blogs"});
    }
    
}

async function editByID (req, res) {
    const params = req.params;
    const body = req.body;
    const title = body.title;
    const id = params.id;

    try {
        const data = await BlogModels.updateOne({_id: id}, {$set: {title: title}});
        res.status(200).json(data);
    } catch(error) {
        res.status(400).json({message: "could not fetch the blogs"});
    }
    
}


// Get the Blogs by a perticular author 

async function blogsByUser (req, res) {
    const params = req.params;
    const emailFromParam = params.email;

    try {
        const data = await BlogModels.find({
            authors: { $elemMatch: {email: emailFromParam} }
        })
        res.status(200).json(data);
    } catch(error) {
        res.status(400).json({message: "could not fetch the blogs"});
    }
}

// get blogs by title 
async function blogsByTitle (req, res) {
    const params = req.params;
    const titleFromParam = params.title;

    try {
        const data = await BlogModels.find({
            title: titleFromParam
        })
        res.status(200).json(data);
    } catch(error) {
        res.status(400).json({message: "could not fetch the blogs"});
    }
}

// get blogs by title or author

async function blogsByTitleOrUser (req, res) {
    const params = req.params;
    const value = params.value;

    try {
        const data = await BlogModels.find({
            $or: [
                {title: value},
                {authors: { $elemMatch: {email: value} } },
            ]
        })
        res.status(200).json(data);
    } catch(error) {
        res.status(400).json({message: "could not fetch the blogs"});
    }
}


module.exports = { createBLog, getAllBlogs, findByID, deleteByID, editByID, blogsByUser, blogsByTitle, blogsByTitleOrUser  }