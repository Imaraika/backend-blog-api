const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    // _id : mongoose.Types.ObjectId,
    title: String,
    content: String,
    author:String
});
module.exports = mongoose.model('BlogPost',postSchema);