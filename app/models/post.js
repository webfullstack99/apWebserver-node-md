const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    description: String,
    created: String,
    userId: String,
    reactions: Object,
});
const Post = mongoose.model('post', postSchema);
module.exports = Post;