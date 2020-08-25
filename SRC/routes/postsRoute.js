import express from 'express';
import {createPost,getAllPosts,getPostById,update,deletePost} from '../controllers/postsContr';

const router = express.Router();
router.post('/post', createPost);
router.get('/post', getAllPosts);
router.get('/post/:id', getPostById);
// router.put('/post/:id', update);
router.delete('/post/:id', deletePost);
// router.get('/post', getAllPostsforTest);
export default router;