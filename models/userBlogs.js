// models/user.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },
    blog: { type: String, required: true }
});


module.exports = mongoose.model('read', blogSchema);
