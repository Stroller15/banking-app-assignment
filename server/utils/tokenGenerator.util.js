import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

export const generateRandomToken = () => {
  return crypto.randomBytes(18).toString('hex');
};