"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _usersRoute = _interopRequireDefault(require("./routes/usersRoute"));

var _messagesRoute = _interopRequireDefault(require("./routes/messagesRoute"));

var _postsRoute = _interopRequireDefault(require("./routes/postsRoute.js"));

var _commentsRoute = _interopRequireDefault(require("./routes/commentsRoute"));

var _authRoutes = _interopRequireDefault(require("./routes/authRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import jsonwebtoken from ('jsonwebtoken');
var app = (0, _express["default"])(); //PORT

var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("listening on port ".concat(port, "..."));
});
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  return res.status(200).json({
    message: 'Welcome '
  });
});
app.use('/', _usersRoute["default"]);
app.use('/', _messagesRoute["default"]);
app.use('/', _postsRoute["default"]);
app.use('/', _commentsRoute["default"]);
app.use('/', _authRoutes["default"]);
var _default = app;
exports["default"] = _default;