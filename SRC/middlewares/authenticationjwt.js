import dotenv from 'dotenv';

dotenv.config();
const express = require('express');
const jwt = require('jsonwebtoken');
import users from '../models/usersDB.collection'
// const authorize = require('./autorization.middlewares');
const {MY_SUPER_SECRET_INGABIRE} = process.env;


const app = express();

//user should be Authenticated !!
export const getToken = (req, res) =>{

    const user = {
        id: "1",
        name : "ANGE"
    }
 jwt.sign(user,process.env.SECRET_K,{ expiresIn: '24h'},(err, token) => {
        
        res.json({
          token
        });
    });
   
}

export const getAPI = (req, res) => {
    res.json({
        message: 'welcome to the API'
    });
}

export const verifyToken= (req, res, next)=>{
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else{
        res.sendStatus(403);
    }
};