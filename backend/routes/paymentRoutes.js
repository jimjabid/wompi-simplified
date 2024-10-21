// paymentRoutes.js
import express from 'express';
import { getIntegritySignature, getTransactionStatus } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/integrity-signature', getIntegritySignature);
router.get('/transaction-status', getTransactionStatus);

export default router;
