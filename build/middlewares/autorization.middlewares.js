"use strict";

var jwt = require('jsonwebtoken');

module.exports = function () {
  return function (req, res, next) {
    console.log('Autorization moddlewares');
    next(); // find jwtin Headers

    var token = req.headers['authorization'];

    if (!token) {
      return res.status(401).send("Access denied");
    } else {
      next();
    }
  };
};