"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComent = exports.update = exports.getAllComents = exports.getComentById = exports.getAll = void 0;

var _commentsCollection = _interopRequireDefault(require("../models/commentsCollection"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAll = function getAll(req, res) {
  if (!_commentsCollection["default"]) {
    return res.status(404).json({
      status: 404,
      error: 'No coments found'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'coments successfully retrieved',
    data: {
      coments: _commentsCollection["default"]
    }
  });
};

exports.getAll = getAll;

var getComentById = function getComentById(req, res) {
  var id = req.params.id;

  var coment = _commentsCollection["default"].filter(function (coment) {
    return coment.id === id;
  });

  if (coment[0]) {
    return res.status(200).json({
      status: 200,
      message: 'coment successfully retrieved',
      data: coment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'coment not found'
  });
};

exports.getComentById = getComentById;

var getAllComents = function getAllComents(req, res) {
  var coment = {
    id: (0, _uuid.v4)(),
    name: req.body.name,
    comentMsg: req.body.comentMsg
  };

  _commentsCollection["default"].push(coment);

  return res.status(201).json({
    status: 201,
    message: 'coment successfully created',
    data: coment
  });
};

exports.getAllComents = getAllComents;

var update = function update(req, res) {
  var id = req.params.id;

  var coment = _commentsCollection["default"].filter(function (coment) {
    return coment.id === id;
  });

  if (coment[0]) {
    coment[0].name = req.body.name;
    coment[0].comentMsg = req.body.comentMsg;
    return res.status(200).json({
      status: 200,
      message: 'coment successfully updated',
      data: coment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'coment not found'
  });
};

exports.update = update;

var deleteComent = function deleteComent(req, res) {
  var id = req.params.id;

  var coment = _commentsCollection["default"].filter(function (coment) {
    return coment.id === id;
  });

  if (coment[0]) {
    var a = _commentsCollection["default"].indexOf(coment[0]);

    _commentsCollection["default"].splice(a, 1);

    return res.status(200).json({
      status: 200,
      message: 'coment successfully deleted',
      data: coment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'coment not found'
  });
};

exports.deleteComent = deleteComent;