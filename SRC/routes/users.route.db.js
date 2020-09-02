const mongoose = require('mongoose');
const UserDB = require('../models/usersDB.collection');

import {createUserinDB,getOneUserinDB, getAllUsersinDB,updateUserinDB,deleteUserindb} from '../controllersMongoDB/users.controllers.db';
 
import express from 'express';
const router = express.Router();
router.get('/userdb', getAllUsersinDB);

router.get('/userdb/:id', getOneUserinDB);

router.post('/userdb', createUserinDB );
router.patch('/userdb/:id', updateUserinDB)

router.delete('/userdb/:id', deleteUserindb );
 export default router;  