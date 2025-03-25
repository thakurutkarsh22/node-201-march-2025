const { Schema, default: mongoose } = require("mongoose");
const validator = require("validator");



const userSchema = new Schema({
    username: { type: String, required: true, unique: true, maxlength: 20, validate: (value) => validator.isAlphanumeric(value)},
    email: { type: String, required: true, unique: true, maxlength: 50, validate: (value) => validator.isEmail(value)},
    password: { type: String, required: true, minlength: 8, maxlength: 1000, validate: (value) => validator.isStrongPassword(value)}
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);