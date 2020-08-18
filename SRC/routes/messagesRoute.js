const express = require('express');
const router = express.Router();
import { getAllMsgs, getMsgById, createMsg, deleteMesg } from '../controllers/messagesContr';

// get all messages
router.get('/message', getAllMsgs);

// get specific message by ID
router.get('/message:id', getMsgById);

// create message by ID
router.post('/message', createMsg);

// delete message by ID
router.delete('/message:id', deleteMesg);

export default router;