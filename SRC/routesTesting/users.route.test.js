import getAllUsers from '../controllersTesting/users.controllers.test';
import express from 'express';
const router = express.Router();

router.get('/users', getAllUsers );
 export default router;