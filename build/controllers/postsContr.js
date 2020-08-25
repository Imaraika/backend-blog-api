"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePost = exports.createPost = exports.getPostById = exports.getAllPosts = exports.getAllPostsforTest = void 0;

var _postsCollection = _interopRequireWildcard(require("../models/postsCollection"));

var _uuid = require("uuid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getAllPostsforTest = function getAllPostsforTest(req, res) {
  return res.status(200).json({
    status: 'success',
    // movies:'favMovies',
    data: _postsCollection.favPosts
  });
};

exports.getAllPostsforTest = getAllPostsforTest;

var getAllPosts = function getAllPosts(req, res) {
  res.send(_postsCollection["default"]);
};

exports.getAllPosts = getAllPosts;

var getPostById = function getPostById(req, res) {
  var id = req.params.id;

  var post = _postsCollection["default"].filter(function (post) {
    return post.id === id;
  });

  res.send(post);
};

exports.getPostById = getPostById;

var createPost = function createPost(req, res) {
  var post = {
    id: (0, _uuid.v4)(),
    title: req.body.title,
    content: req.body.content,
    comment: [],
    author: req.body.author
  };

  _postsCollection["default"].push(post);

  res.send(post);
}; // export const update=(req,res)=>{
//     const id = req.params.id;
//     const post = posts.filter((post) => {
//         return post.id === id;
//     });
//     if(post[0]){
//         post[0].title=req.body.title;
//         post[0].content=req.body.content;
//         post[0].author= req.body.author;
//         return res.status(200).json({
//             status: 200,
//             message: 'post successfully updated',
//             data: post,
//         });
//     }
//     return res.status(404).json({
//         status: 404,
//         error: 'post not found',
//     });
// }


exports.createPost = createPost;

var deletePost = function deletePost(req, res) {
  var id = req.params.id;

  var found = _postsCollection["default"].find(function (post) {
    return post.id === id;
  });

  _postsCollection["default"].splice(_postsCollection["default"].indexOf(found), 1);

  res.send(_postsCollection["default"]);
};

exports.deletePost = deletePost;