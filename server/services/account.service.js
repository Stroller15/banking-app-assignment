import prisma from '../config/db.js';

export const createAccount = async (userId) => {
  return await prisma.account.create({ data: { userId } });
};

export const getAccountsByUserId = async (userId) => {
  return await prisma.account.findMany({ where: { userId } });
};

export const getAccountById = async (id) => {
  return await prisma.account.findUnique({ where: { id } });
};

export const updateAccountBalance = async (id, amount) => {
  return await prisma.account.update({
    where: { id },
    data: { balance: { increment: amount } },
  });
};