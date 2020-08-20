"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _messagesContr = require("../controllers/messagesContr");

var express = require('express');

var router = express.Router();
// get all messages
router.get('/message', _messagesContr.getAllMsgs); // get specific message by ID

router.get('/message/:id', _messagesContr.getMsgById); // create message by ID

router.post('/message', _messagesContr.createMsg); // delete message by ID

router["delete"]('/message/:id', _messagesContr.deleteMesg);
var _default = router;
exports["default"] = _default;