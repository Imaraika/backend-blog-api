const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

//user should be Authenticated !!
export const getToken = (req, res) =>{
    const payload = {
        name : "Jimmy"
    };
    const token = jwt.sign(payload,"my super secret key");
    res.send(token);
}

export const getAPI =(req, res) => {
    res.json({
        message: 'welcome to the API'
    });
}
