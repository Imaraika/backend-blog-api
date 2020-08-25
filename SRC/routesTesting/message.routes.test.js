import getAllMsg from '../controllersTesting/message.controllers.test';
import express from 'express';
const router = express.Router();
router.get('/messages', getAllMsg );
 export default router;
 