import * as accountService from '../services/account.service.js';

export const createAccount = async (req, res, next) => {
  try {
    const account = await accountService.createAccount(req.user.id);
    res.status(201).json({ message: 'Account created successfully', account });
  } catch (error) {
    next(error);
  }
};

export const getAccounts = async (req, res, next) => {
  try {
    const accounts = await accountService.getAccountsByUserId(req.user.id);
    res.json({ accounts });
  } catch (error) {
    next(error);
  }
};