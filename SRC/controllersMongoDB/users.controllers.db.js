const mongoose = require('mongoose');
const UserDB = require('../models/usersDB.collection');

const getAllUsersinDB = (req, res, next) => {
    UserDB.find()
  
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
 const createUserinDB = (req, res, next) =>{
    const userDB = new UserDB({
        _id:new mongoose.Types.ObjectId(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.password
    });
    userDB.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "User successfully created",
            data:result
        });
    }).catch(err => console.log(err));
   
}
 const getOneUserinDB = (req, res, next) => {
    const id = req.params.id;
    UserDB.findById(id)
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
const updateUserinDB = (req, res, next) => {
    const id = req.params.id;
    UserDB.updateOne({ _id: id } , {$set: {username:req.body.username, email: req.body.email, password: req.body.password, role: req.body.role}})
    .exec()
    .then( result => {
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
});
}
const deleteUserindb = (req, res, next) => {
    const id = req.params.id;
    UserDB.deleteOne({ _id: id })
    .exec()
    .then( result => {
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

module.exports = {
    createUserinDB,
    getOneUserinDB,
    getAllUsersinDB,
    updateUserinDB,
    deleteUserindb
};
