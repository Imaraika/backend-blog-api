const express = require('express');
const router = express.Router();
import { getAllMsgs, getMsgById, createMsg, deleteMesg } from '../controllers/messagesContr';

// get all messages
router.get('/', getAllMsgs);

// get specific message by ID
router.get('/:id', getMsgById);

// create message by ID
router.post('/', createMsg);

// delete message by ID
router.delete('/:id', deleteMesg);

export default router;