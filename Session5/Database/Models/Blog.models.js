const { Schema, default: mongoose } = require("mongoose");


const blogSchema = new Schema({
    title: { type: String, required: true, unique: true, min: 5, max: 100},
    authors: [String],
    content: { type: String, required: true, min: 5}
}, {
    timestamps: true
})

module.exports = mongoose.model("Blog", blogSchema);