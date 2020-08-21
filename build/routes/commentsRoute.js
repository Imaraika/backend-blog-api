"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentsContr = require("../controllers/commentsContr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/coment', _commentsContr.getAllComents);
router.get('/coment', _commentsContr.getAll);
router.get('/coment/:id', _commentsContr.getComentById);
router.put('/coment/:id', _commentsContr.update);
router["delete"]('/coment/:id', _commentsContr.deleteComent);
var _default = router;
exports["default"] = _default;