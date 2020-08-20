import express, { Router } from 'express'; 
import { getAPI, verifyToken, getToken} from '../middlewares/authenticationjwt';
import jwt from 'jsonwebtoken'

const router = express.Router();
router.get('/api', getAPI );
router.post('/login', getToken);

router.post('/postToken', verifyToken);

export default router;