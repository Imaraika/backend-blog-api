
import { favPosts} from '../models/postsCollection';


import posts from '../models/postsCollection';
import { v4 as uuidv4 } from 'uuid';

export const getAllPostsforTest = (req, res) => {
    return res.status(200).json({
    // status: 'success',
    // post:'favPosts',
    // data: favPosts
    });
};

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

// export const update=(req,res)=>{
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
export const deletePost=(req,res)=>{
    let id = req.params.id;
	let found = posts.find((post) => post.id === id);
	posts.splice(posts.indexOf(found), 1);
	res.send(posts);
};