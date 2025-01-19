import User from '../models/user.Model.js';
import bcryptjs from 'bcryptjs';
import crypto from 'crypto';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';
import { generateVerificationToken } from '../utils/generateVerificationToken.js';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import { sendVerificationEmail } from '../utils/emails.js';

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
  const hashedPassword = await bcryptjs.hash(password, 10);

  //generate verification code
  const verificationToken = generateVerificationToken();

  // Create new user
  const user = await User.create({
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
    confirmPassword: hashedPassword,
    verificationToken,
    verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  });

  // Save user to database
  await user.save();

  //Creating the JWT and Setting a Cookie
  generateTokenAndSetCookie(res, user._id);

  //send verification email
  await sendVerificationEmail(user.email, user.verificationToken);

  // Send response
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    user: {
      ...user._doc,
      password: undefined,
      confirmPassword: undefined,
    },
  });
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
