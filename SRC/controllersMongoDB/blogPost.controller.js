const mongoose = require('mongoose');
const BlogPost = require('../models/blogpost.collection');

export const createBloginDB = (req, res, next) =>{
    const blogpost = new BlogPost({
        // _id:new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });
    blogpost.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: "handling POST request to /blogpost",
        createBloginDB: blogpost
    });
}
export default createBloginDB ;
 