"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.update = exports.getAllUsers = exports.getUserById = exports.getAll = void 0;

var _userscollection = _interopRequireDefault(require("../models/userscollection"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAll = function getAll(req, res) {
  if (!_userscollection["default"]) {
    return res.status(404).json({
      status: 404,
      error: 'No office found'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'users successfully retrieved',
    data: {
      users: _userscollection["default"]
    }
  });
};

exports.getAll = getAll;

var getUserById = function getUserById(req, res) {
  var id = req.params.id;

  var user = _userscollection["default"].filter(function (user) {
    return user.id === id;
  });

  if (user[0]) {
    return res.status(200).json({
      status: 200,
      message: 'user successfully retrieved',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.getUserById = getUserById;

var getAllUsers = function getAllUsers(req, res) {
  var user = {
    id: (0, _uuid.v4)(),
    email: req.body.email,
    password: req.body.password,
    role: 'user'
  };

  _userscollection["default"].push(user);

  return res.status(201).json({
    status: 201,
    message: 'user successfully created',
    data: user
  });
};

exports.getAllUsers = getAllUsers;

var update = function update(req, res) {
  var id = req.params.id;

  var user = _userscollection["default"].filter(function (user) {
    return user.id === id;
  });

  if (user[0]) {
    user[0].email = req.body.email;
    user[0].password = req.body.password;
    return res.status(200).json({
      status: 200,
      message: 'user successfully updated',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.update = update;

var deleteUser = function deleteUser(req, res) {
  var id = req.params.id;

  var user = _userscollection["default"].filter(function (user) {
    return user.id === id;
  });

  if (user[0]) {
    var a = _userscollection["default"].indexOf(user[0]);

    _userscollection["default"].splice(a, 1);

    return res.status(200).json({
      status: 200,
      message: 'user successfully deleted',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.deleteUser = deleteUser;