
import posts from '../models/postsCollection';
import { v4 as uuidv4 } from 'uuid';

export const getAllPosts = (req, res) => {
    res.send(posts);
};
export const getPostById = (req, res) => {
    let id = req.params.id;
	let post = posts.filter((post) => post.id === id);
	res.send(post);
};
export const createPost = (req, res) => {
    const post = {
        id: uuidv4(),
        title:req.body.title,
        content:req.body.content, 
        comment:[],
        author: req.body.author
    };
    posts.push(post);
    res.send(post);
};

export const deletePost=(req,res)=>{
    let id = req.params.id;
	let found = posts.find((post) => post.id === id);
	posts.splice(posts.indexOf(found), 1);
	res.send(posts);
};