const { Schema, default: mongoose } = require("mongoose");
const validator = require("validator");


// nested schema 
const authorSchema = new Schema({
    fullName: { type: String, maxlength: 25},
    email: { type: String, maxlength: 50, validate: (value) =>  validator.isEmail(value)},
    image: { type: String}
}, {
    _id: false
})

const blogSchema = new Schema({
    title: { type: String, required: true, unique: true, maxlength: 100},
    authors: [authorSchema],
    content: { type: String, required: true, maxlength: 1000}
}, {
    timestamps: true
})

module.exports = mongoose.model("Blog", blogSchema);
