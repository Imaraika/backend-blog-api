// import {} from 'dotenv/config';
const express = require('express');
const jwt = require('jsonwebtoken');
const authorize = require('./autorization.middlewares');
const {my_super_secret_key_ange} = process.env;


const app = express();

//user should be Authenticated !!
export const getToken = (req, res) =>{

    const user = {
        name : "ANGE",
        email:'ange@gmail.com',
        // password: "",
        role: "admin"
    }
     const generateToken = (name,email,password,role) => {
     jwt.sign(user,"my_super_secret_key",{ expiresIn: '24h'},(err, token) => {
        
        res.json({
          token
        });
    });
}
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