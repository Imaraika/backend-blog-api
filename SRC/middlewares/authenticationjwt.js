// import {} from 'dotenv/config';
const express = require('express');
const jwt = require('jsonwebtoken');
const authorize = require('./autorization.middlewares');
const {my_super_secret_key} = process.env;


const app = express();

//user should be Authenticated !!
export const getToken = (req, res) =>{

    const user = {
        id: "1",
        name : "ANGE",
        password: "",
        role: "admin"
    }
 jwt.sign(user,"my_super_secret_key",{ expiresIn: '30s'},(err, token) => {
        
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

export const verifyToken = (req, res, next)=>{
    const bearerHeader = req.headers['authorization'];
    // check if bearer is undentified
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else{
        // res.sendStatus(403);
        res.json({
            message: "not working"
        });
    }
};