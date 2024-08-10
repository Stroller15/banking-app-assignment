import api from './api';

export const getAccounts = async () => {
  const response = await api.get('/accounts');
  console.log(response)
  console.log(response.data);
  return response.data;
};

export const createAccount = async () => {
  const response = await api.post('/accounts');
  return response.data;
};