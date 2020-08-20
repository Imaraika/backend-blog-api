import express, { Router } from 'express'; 
import { getAPI, verifyToken, getToken} from '../middlewares/authenticationjwt';
import jwt from 'jsonwebtoken'
const authorize = require('../middlewares/autorization.middlewares');


const router = express.Router();
router.get('/api',getAPI );
router.post('/login', getToken);

router.post('/postsToken',verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
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