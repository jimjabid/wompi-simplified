// server.js
import express from 'express';

import cors from 'cors';
import paymentRoutes from './routes/paymentRoutes.js';



const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
