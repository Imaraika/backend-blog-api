const mongoose = require('mongoose');
const BlogPost = require('../models/blogpost.collection');

import createBloginDB from '../controllersMongoDB/blogPost.controller';
import express from 'express';
const router = express.Router();

router.post('/blogdb', createBloginDB );
 export default router;