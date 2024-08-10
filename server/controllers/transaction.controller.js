import * as transactionService from '../services/transaction.service.js';
import * as accountService from '../services/account.service.js';

export const deposit = async (req, res, next) => {
  try {
    const { accountId, amount } = req.body;
    const account = await accountService.getAccountById(accountId);
    if (!account || account.userId !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    await accountService.updateAccountBalance(accountId, amount);
    const transaction = await transactionService.createTransaction(accountId, amount, 'DEPOSIT');
    res.json({ message: 'Deposit successful', transaction });
  } catch (error) {
    next(error);
  }
};

export const withdraw = async (req, res, next) => {
  try {
    const { accountId, amount } = req.body;
    const account = await accountService.getAccountById(accountId);
    if (!account || account.userId !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    if (account.balance < amount) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }
    await accountService.updateAccountBalance(accountId, -amount);
    const transaction = await transactionService.createTransaction(accountId, amount, 'WITHDRAW');
    res.json({ message: 'Withdrawal successful', transaction });
  } catch (error) {
    next(error);
  }
};

export const getTransactions = async (req, res, next) => {
  try {
    const { accountId } = req.params;
    const account = await accountService.getAccountById(parseInt(accountId));
    if (!account || account.userId !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    const transactions = await transactionService.getTransactionsByAccountId(parseInt(accountId));
    res.json({ transactions });
  } catch (error) {
    next(error);
  }
};