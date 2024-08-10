import express from 'express';
import * as accountController from '../controllers/account.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', authenticate, authorize(['CUSTOMER']), accountController.createAccount);
router.get('/', authenticate, accountController.getAccounts);

export default router;