import express, { Router } from 'express'; 
import dotenv from 'dotenv';

import { getAPI, verifyToken, getToken} from '../middlewares/authenticationjwt';
import jwt from 'jsonwebtoken'
const authorize = require('../middlewares/autorization.middlewares');


const router = express.Router();
router.get('/api',getAPI );
router.post('/login', getToken);

router.post('/register',verifyToken, (req, res) => {
    jwt.verify(req.token, 'MY_SUPER_SECRET', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else{
            res.json({
                message: 'Post created .....',
                authData
            });
        }
    })

});

export default router;