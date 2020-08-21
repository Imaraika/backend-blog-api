import express from 'express';
import {getAllUsers,getAll,getUserById,update,deleteUser} from '../controllers/users';

const router = express.Router();
router.post('/user', getAllUsers);
router.get('/user', getAll);
router.get('/user/:id', getUserById);
router.put('/user/:id', update);
router.delete('/user/:id', deleteUser);
export default router;