"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePost = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;

var _postsCollection = _interopRequireDefault(require("../models/postsCollection"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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