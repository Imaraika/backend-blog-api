const mongoose = require('mongoose');
const BlogPost = require('../models/blogpost.collection');

import {getSpecificPostinDB,createBloginDB} from '../controllersMongoDB/blogPost.controller';
 
import express from 'express';
const router = express.Router();

router.get('/blogdb/:id', getSpecificPostinDB)

router.post('/blogdb', createBloginDB );
 export default router;  