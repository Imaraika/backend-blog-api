"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = require("../controllers/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/user', _users.getAllUsers);
router.get('/user', _users.getAll);
router.get('/user/:id', _users.getUserById);
router.put('/user/:id', _users.update);
router["delete"]('/user/:id', _users.deleteUser);
var _default = router;
exports["default"] = _default;