import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userToken: String,
	username: String,
	email: String,
	password: String,
    role: String, 
});

module.exports = mongoose.model('UserDB', userSchema);