const mongoose = require('mongoose');
const MessageContact = require('../models/messages.collection.db');

import {getSpecificMsginDB,createMsginDB} from '../controllersMongoDB/messages.controllers.db';
 
import express from 'express';
const router = express.Router();

router.get('/messagedb/:id', getSpecificMsginDB)

router.post('/messagedb', createMsginDB );
 export default router;  