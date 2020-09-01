const mongoose = require('mongoose');
const MessageContact = require('../models/messages.collection.db');

 const createMsginDB = (req, res, next) =>{
    const messageContact = new MessageContact({
        _id:new mongoose.Types.ObjectId(),
        email: req.body.email,
        name: req.body.name,
        msg: req.body.msg,
        // date:req.body.date
    });
    messageContact.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: "handling POST request to /MessageContact",
        createMsginDB: messageContact
    });
}
 const getSpecificMsginDB = (req, res, next) => {
    const id = req.params.id;
    BlogPost.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc)
    }).catch(err => console.log(err));
    res.status(500).json({
        message: "not working"
    });
};
module.exports = {
    createMsginDB,
    getSpecificMsginDB,
};
 