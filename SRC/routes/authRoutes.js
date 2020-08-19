import express, { Router } from 'express'; 
import { getAPI, getToken} from '../middlewares/authenticationjwt';
import jwt from 'jsonwebtoken'

const router = express.Router();
router.get('/api', getAPI );
router.get('/token', getToken);

export default router;