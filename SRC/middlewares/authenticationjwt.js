const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

//user should be Authenticated !!
export const getToken = (req, res) =>{
    const user = {
        id: "1",
        name : "ANGE"
    }
    const token = jwt.sign(user,"my super secret key",(err, token) => {
        res.send(token);
    });
   
}
 export const verifyToken = (req,res) =>{

    res.json({
        message: 'post created!!'
    });
    function  verifyToken(req, res, next) {
        const bearHeader = req.headers['authorization'];
        if(typeof bearHeader != 'undefined') {
        
        }else{
            //Forbidden
        res.sendStatus(403);
        }
        
        
        }
}
//FORMAT of TOKEN

//verify token 


export const getAPI =(req, res) => {
    res.json({
        message: 'welcome to the API'
    });
}
