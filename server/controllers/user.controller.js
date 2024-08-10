import * as userService from '../services/user.service.js';

export const register = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, accessToken, randomToken } = await userService.loginUser(email, password);
    res.json({ message: 'Login successful', user, accessToken, randomToken });
  } catch (error) {
    next(error);
  }
};