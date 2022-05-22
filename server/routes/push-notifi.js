import express from 'express';
// controllers
import pushController from '../controllers/notification.js';

const router = express.Router();

router
  .post('/send', pushController.sendNotification)

export default router;
