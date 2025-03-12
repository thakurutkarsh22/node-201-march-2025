const BlogModels = require("../Database/Models/Blog.models");

async function createBLog (req, res) {
    const body = req.body;
    const title = body.title;
    const content = body.content;

    const blogObject = BlogModels({
        title: title,
        content: content,
    })

    // this save is saving the blogObject in the database

    try {
        const response = await blogObject.save();
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


module.exports = { createBLog, getAllBlogs, findByID, deleteByID, editByID }