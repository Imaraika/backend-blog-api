import express from 'express';
import {createPost,getAllPosts,getPostById,deletePost} from '../controllers/postsContr';
const mongoose = require('mongoose');

const Product = require('../models/postsCollection');

const router = express.Router();
router.post('/post', createPost);
router.get('/post', getAllPosts);
router.get('/post/:id', getPostById);
router.delete('/post/:id', deletePost);
export default router;