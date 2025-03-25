const BlogModels = require("../Database/Models/Blog.models");

class BlogService {

    static async createBLogServiceFunc(title, content, authors) {
        const blogObject = BlogModels({
            title: title,
            content: content,
            authors: authors,
        })
    
        // this save is saving the blogObject in the database
    
        try {
            const response = await blogObject.save();
            return response;
        } catch(error) {
            throw new Error("cant create a blog")
        }
    }

}

module.exports = BlogService;