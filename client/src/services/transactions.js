import api from './api';

export const getTransactions = async (accountId) => {
  const response = await api.get(`/transactions/${accountId}`);
  return response.data;
};

export const deposit = async (accountId, amount) => {
  const response = await api.post('/transactions/deposit', { accountId, amount });
  return response.data;
};

export const withdraw = async (accountId, amount) => {
  const response = await api.post('/transactions/withdraw', { accountId, amount });
  return response.data;
};