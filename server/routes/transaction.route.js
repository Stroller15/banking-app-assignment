import express from 'express';
import * as transactionController from '../controllers/transaction.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/deposit', authenticate, authorize(['CUSTOMER']), transactionController.deposit);
router.post('/withdraw', authenticate, authorize(['CUSTOMER']), transactionController.withdraw);
router.get('/:accountId', authenticate, transactionController.getTransactions);

export default router;