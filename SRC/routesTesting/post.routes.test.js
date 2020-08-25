import getAllPosts from '../controllersTesting/post.controllers.test';
import express from 'express';
const router = express.Router();

router.get('/posts', getAllPosts );
 export default router;