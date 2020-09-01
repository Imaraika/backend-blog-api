const mongoose = require('mongoose');
const BlogPost = require('../models/blogpost.collection');

const getAllPostinDB = (req, res, next) => {
    BlogPost.find()
  
    .then(docs =>{
        console.log(docs);
        res.status(200).json(docs)
    })
    .catch(err => {
        console.log(err);
    res.status(500).json({
        error: err
    });
});
}
 const createBloginDB = (req, res, next) =>{
    const blogpost = new BlogPost({
        _id:new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });
    blogpost.save().then(result => {
        console.log(result);
        res.status(201).json({
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
const updatePostinDB = (req, res, next) => {
    const id = req.params.id;
    BlogPost.updateOne({ _id: id } , {$set: {title:req.body.newTitle, content: req.body.newContent, author: req.body.newAuthor}})
    .exec().then( result => {
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
});
}
const deletePostindb = (req, res, next) => {
    const id = req.params.id;
    BlogPost.deleteOne({ _id: id }).exec().then( result => {
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

module.exports = {
    createBloginDB,
    getSpecificPostinDB,
    getAllPostinDB,
    updatePostinDB,
    deletePostindb
};
