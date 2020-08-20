"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var messg = [{
  email: 'ange@gmail.com',
  name: 'Ange',
  msg: 'Hello, well done',
  date: new Date()
}, {
  email: 'benimana@gmail.com',
  name: 'benimena',
  msg: 'great work',
  date: new Date()
}, {
  email: 'koko10@gmail.com',
  name: 'koko lolo',
  msg: 'Hello there',
  date: new Date()
}];
messg = messg.map(function (msg) {
  return _objectSpread({
    id: (0, _uuid.v4)()
  }, msg);
});
var _default = messg;
exports["default"] = _default;