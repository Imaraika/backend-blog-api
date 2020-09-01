const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    email: String,
	name: String,
	msg: String
	// date: new Date(),
});
module.exports = mongoose.model('MessageContact',messageSchema);