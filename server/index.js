import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import accountRoutes from './routes/account.route.js';
import transactionRoutes from './routes/transaction.route.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import cors from 'cors'
import morgan from 'morgan';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get("/ping", (req, res) => {
  res.json({
    message: "pong"
  })
})

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/accounts', accountRoutes);
app.use('/api/v1/transactions', transactionRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅🚀 Server running on port ${PORT}`);
});