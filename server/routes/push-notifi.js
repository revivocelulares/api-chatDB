import express from 'express';
// controllers
import pushController from '../controllers/notification.js';

const router = express.Router();

router
  .post('/create', pushController.createNotification)
  .post('/user', pushController.createUser)
  .post('/subscription', pushController.registerDevice)

export default router;
