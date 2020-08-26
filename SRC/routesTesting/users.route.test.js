import getAllUsers from '../controllersTesting/users.controllers.test';
import createUser from '../controllersTesting/users.controllers.test';
import express from 'express';
const router = express.Router();

router.get('/users', getAllUsers );
router.post('/users', createUser);
 export default router;