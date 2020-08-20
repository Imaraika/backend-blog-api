"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var posts = [{
  title: 'Modern CSS Techniques To Improve Legibility.',
  content: "In this article, we cover how we can improve websites legibility using some modern CSS techniques,\n    great new technologies like variable fonts and putting into practise what we learned from doing\n    scientific researches..",
  author: 'Admin'
}, {
  title: 'Software design in software production',
  content: "Convert Any Website into Android Application\n    in Android Studio in 10 minutes.\n    This tutorial walks you through creating a new Android Project, adding a WebView, loading a remote URL,\n    and then loading a local HTML page. Design - Material , Software used: Android Studio.",
  author: 'Solange'
}, {
  title: 'HTML:HyperText Markup Language',
  content: "HTML:HyperText Markup Language in 10 minutes.\n    This tutorial walks you through creating a new Android Project, adding a WebView, loading a remote URL,\n    and then loading a local HTML page. Design - Material , Software used: Android Studio...",
  author: 'bebe'
}];
posts = posts.map(function (post) {
  return _objectSpread({
    id: (0, _uuid.v4)()
  }, post);
});
var _default = posts;
exports["default"] = _default;