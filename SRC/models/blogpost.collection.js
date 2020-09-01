const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
    author:String
});
module.exports = mongoose.model('BlogPost',postSchema);