import express from 'express';
import {createComent,getAll,getComentById,update,deleteComent} from '../controllers/commentsContr';

const router = express.Router();
router.post('/coment', createComent);
router.get('/coment', getAll);
router.get('/coment/:id', getComentById);
router.put('/coment/:id', update);
router.delete('/coment/:id', deleteComent);
export default router;