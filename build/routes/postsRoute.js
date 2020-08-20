"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _postsContr = require("../controllers/postsContr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/post', _postsContr.createPost);
router.get('/post', _postsContr.getAllPosts);
router.get('/post/:id', _postsContr.getPostById); // router.put('/post/:id', update);

router["delete"]('/post/:id', _postsContr.deletePost);
var _default = router;
exports["default"] = _default;