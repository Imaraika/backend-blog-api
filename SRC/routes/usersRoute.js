import express from 'express';
import {getAllUsers,getAll,getUserById,update,deleteUser, createUser} from '../controllers/users';

const router = express.Router();
router.post('/user', createUser);
router.get('/user', getAll);
router.get('/user/:id', getUserById);
router.put('/user/:id', update);
router.delete('/user/:id', deleteUser);
export default router;