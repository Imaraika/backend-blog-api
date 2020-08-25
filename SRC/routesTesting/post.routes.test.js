import express from 'express';
import { getAllPostsforTest } from '../controllersTesting/post.controllers.test';

const router = express.Router();

router.get('/post', getAllPostsforTest);
 export default router;