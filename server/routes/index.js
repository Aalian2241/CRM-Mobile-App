import express from 'express';
import homeController from '../controllers/CRM.js';

const router = express.Router();

router.get('/', homeController.getResults);

export default router;
