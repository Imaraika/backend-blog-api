import getAllcmts from '../controllersTesting/comments.controllers.test';
import express from 'express';
const router = express.Router();
router.get('/comments', getAllcmts );
 export default router;
 