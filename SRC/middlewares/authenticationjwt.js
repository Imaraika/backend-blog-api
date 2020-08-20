const express = require('express');
const jwt = require('jsonwebtoken');
const authorize = require('./autorization.middlewares');

const app = express();

//user should be Authenticated !!
export const getToken = (req, res) =>{
    const user = {
        id: "1",
        name : "ANGE"
    }
    const token = jwt.sign(user,"my super secret key",{ expiresIn: '30s'},(err, token) => {
        res.send(token);
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
        res.sendStatus(403);
    }
};