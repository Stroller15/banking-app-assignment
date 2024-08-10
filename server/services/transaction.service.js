import prisma from '../config/db.js';

export const createTransaction = async (accountId, amount, type) => {
  return await prisma.transaction.create({
    data: { accountId, amount, type },
  });
};

export const getTransactionsByAccountId = async (accountId) => {
  return await prisma.transaction.findMany({ where: { accountId } });
};