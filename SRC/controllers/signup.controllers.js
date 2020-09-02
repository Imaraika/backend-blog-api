import jwt from 'jsonwebtoken';
import dotEnv from 'dotenv';
import mongoose from 'mongoose';
const User = require('../models/usersDB.collection');

dotEnv.config();


export const signup = (req, res) => {
    //Get provided values then sign user up
    let { username, email, password, role } = req.body;
    if (username && email && password && role ) {
        if (role === "user"|| role === "admin") {
            const userId = new mongoose.Types.ObjectId();
               //Hash the password
            password = jwt.sign(password, process.env.SECRET_K);
            
            jwt.sign({ _id: userId, username, email, password, role }, process.env.SECRET_K, (err, token) => {
                if(token) {
                    //Create an instance of User model
                    const UserDB = new User({
                        _id: userId,
                        userToken: token,
                        username,
                        email,
                        password,
                        role,
                    });
                    //Save the user data to the database
                    UserDB.save()
                        .then(result => {
                            return res.status(200).json({
                                message: "Sign up successful",
                                userToken: result.userToken,
                                userRole: result.role
                            });
                        })
                        .catch(err => {
                            return res.status(500).json({
                                Error: err
                            });
                        }); 
                }
                if (err) {
                    return res.status(500).json({
                        status: 'Server Error',
                        message: "Failed. Please sign up again"
                    })
                }
            });
        } else {
            res.status(400).json({
                status: 'Bad Request',
                message: 'Invalid role. Should be admin or user'
            });
        } 
    }
}

//     else res.status(400).json({
//         status: 'Bad Request',
//         message: 'Please, provide all details for a user (username, email, password, role) and make sure subscribed is yes or no'
//     });
// }