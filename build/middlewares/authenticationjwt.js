"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.getAPI = exports.getToken = void 0;

// import {} from 'dotenv/config';
var express = require('express');

var jwt = require('jsonwebtoken');

var authorize = require('./autorization.middlewares');

var my_super_secret_key = process.env.my_super_secret_key;
var app = express(); //user should be Authenticated !!

var getToken = function getToken(req, res) {
  var user = {
    id: "1",
    name: "ANGE"
  };
  jwt.sign(user, "my_super_secret_key", {
    expiresIn: '30s'
  }, function (err, token) {
    res.send(token);
  });
};

exports.getToken = getToken;

var getAPI = function getAPI(req, res) {
  res.json({
    message: 'welcome to the API'
  });
};

exports.getAPI = getAPI;

var verifyToken = function verifyToken(req, res, next) {
  var bearerHeader = req.headers['authorization']; // check if bearer is undentified

  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(' ');
    var bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    // res.sendStatus(403);
    res.json({
      message: "not working"
    });
  }
};

exports.verifyToken = verifyToken;