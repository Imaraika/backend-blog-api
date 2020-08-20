"use strict";

var _messages = _interopRequireDefault(require("../models/messages"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllMsgs = function getAllMsgs(req, res) {
  res.send(_messages["default"]);
};

var getMsgById = function getMsgById(req, res) {
  var id = req.params.id;

  var msg = _messages["default"].filter(function (msg) {
    return msg.id === id;
  });

  res.send(msg);
};

var createMsg = function createMsg(req, res) {
  var newMsg = {};
  newMsg.id = (0, _uuid.v4)();
  newMsg.name = req.body.name;
  newMsg.email = req.body.email;
  newMsg.msg = req.body.msg;
  newMsg.date = new Date();

  _messages["default"].push(newMsg);

  res.send(_messages["default"]);
};

var deleteMesg = function deleteMesg(req, res) {
  var id = req.params.id;

  var found = _messages["default"].find(function (msg) {
    return msg.id === id;
  });

  _messages["default"].splice(_messages["default"].indexOf(found), 1);

  res.send(_messages["default"]);
};

module.exports = {
  getAllMsgs: getAllMsgs,
  getMsgById: getMsgById,
  createMsg: createMsg,
  deleteMesg: deleteMesg
};