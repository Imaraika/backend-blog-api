const mongoose = require('mongoose');
const BlogPost = require('../models/blogpost.collection');

import {getAllPostinDB,getSpecificPostinDB,createBloginDB,updatePostinDB, deletePostindb} from '../controllersMongoDB/blogPost.controller';
 
import express from 'express';
const router = express.Router();
router.get('/blogdb', getAllPostinDB);

router.get('/blogdb/:id', getSpecificPostinDB);

router.post('/blogdb', createBloginDB );
router.patch('/blogdb/:id', updatePostinDB)

router.delete('/blogdb/:id', deletePostindb );
 export default router;  