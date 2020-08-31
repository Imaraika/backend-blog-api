import posts from '../models/postsCollection';
import { v4 as uuidv4 } from 'uuid';

const getAllPosts = (req, res) => {
	res.send(posts);
};
const getPostById = (req, res) => {
	let id = req.params.id;
    let pst = posts.filter((pst) =>{
    return pst.id === id
    });
    if (pst[0]) {
        return res.status(200).json({
            status: 200,
            message: 'post successfully retrieved',
            data: posts,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'Post not found',
    });
// 	res.send(pst);
};

const createPost = (req, res) => {
	let newpst = {};
	newpst.id = uuidv4();
	newpst.title = req.body.title;
	newpst.content = req.body.content;
	newpst.author = req.body.author;
	// newpst.date = new Date();
	posts.push(newpst);

    return res.status(201).json({
        status: 201,
        message: 'Post successfully created',
        data: posts
    });
};

const deletePost = (req, res) => {
	let id = req.params.id;
	let found = posts.find((pst) =>{ 
        return pst.id === id }
        );
        if (found[0]) {
            var p = posts.indexOf(post[0]);
            posts.splice(p, 1);
            return res.status(200).json({
                status: 200,
                message: 'post successfully deleted',
                data: posts,
            });
        }
        return res.status(404).json({
            status: 404,
            error: 'post not found',
        });
    }
module.exports = {
	getAllPosts,
	getPostById,
	createPost,
	deletePost,
};