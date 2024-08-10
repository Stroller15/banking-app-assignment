import prisma from '../config/db.js';
import { hashPassword, comparePasswords } from '../utils/password.util.js';
import { generateAccessToken, generateRandomToken } from '../utils/tokenGenerator.util.js';

export const createUser = async (userData) => {
  const hashedPassword = await hashPassword(userData.password);
  const user = await prisma.user.create({
    data: { ...userData, password: hashedPassword },
  });
  return user;
};

export const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await comparePasswords(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const accessToken = generateAccessToken(user.id);
  const randomToken = generateRandomToken();
  return { user, accessToken, randomToken };
};

export const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
};