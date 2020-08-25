import express from 'express';
import {createPost,getAllPosts,getPostById,deletePost} from '../controllers/postsContr';

const router = express.Router();
router.post('/post', createPost);
router.get('/post', getAllPosts);
router.get('/post/:id', getPostById);
router.delete('/post/:id', deletePost);
export default router;