import User from '../models/user.Model.js';
import catchAsync from '../lib/catchAsync';
import AppError from '../lib/appError';

export const signup = catchAsync(async (req, res) => {
  // Get user input from request body
  const { firstName, lastName, email, username, password, confirmPassword } =
    req.body;

  // Validate that all fields are provided
  if (!firstName || !lastName || !email || !username || !password) {
    throw new AppError('All input is required');
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError('User already exists');
  }

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    throw new AppError('Passwords do not match');
  }

  //hash password
  const hashedPassword = await User.hashPassword(password);

  const user = await User.create({ email, password });
  res.status(201).json({ user });
});

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select('email password').exec();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const logout = async (req, res) => {
  res.send('Logout route');
};
