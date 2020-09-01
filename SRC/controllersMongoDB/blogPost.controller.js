const mongoose = require('mongoose');
const BlogPost = require('../models/blogpost.collection');

 const createBloginDB = (req, res, next) =>{
    const blogpost = new BlogPost({
        _id:new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });
    blogpost.save().then(result => {
        console.log(result);
        res.status(200).json({
            message: "Post successfully created",
            // createBloginDB: blogpost,
            data:result
        });
    }).catch(err => console.log(err));
   
}
 const getSpecificPostinDB = (req, res, next) => {
    const id = req.params.id;
    BlogPost.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc)
    })
    .catch(err => {
        console.log(err);
    res.status(500).json({
        error: err
    });
    });
}
module.exports = {
    createBloginDB,
    getSpecificPostinDB,
};
