// paymentController.js
import crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


const integritySecret = process.env.WOMPI_INTEGRITY_SECRET;
const privateKey = process.env.WOMPI_PRIVATE_KEY;


// @desc    Crear la Integrity-signature
// @route   POST /api/payments/integrity-signature
// @access  Public

export const getIntegritySignature = (req, res) => {
  const { reference, amountInCents, currency } = req.body;

  const signatureString = `${reference}${amountInCents}${currency}${integritySecret}`;
  const integritySignature = crypto.createHash('sha256').update(signatureString).digest('hex');

  res.json({ integritySignature });
};

// @desc    Obtener el estado de la transaccion
// @route   GET /api/payments/transaction-status
// @access  Public

export const getTransactionStatus = async (req, res) => {
  const transactionId = req.query.id;

  try {
    const response = await axios.get(`https://sandbox.wompi.co/v1/transactions/${transactionId}`, {
      headers: { Authorization: `Bearer ${privateKey}` },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching transaction status:', error);
    res.status(500).json({ error: 'Failed to fetch transaction status' });
  }
};
