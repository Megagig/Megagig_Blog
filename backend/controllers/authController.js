import User from '../models/user.Model.js';
import bcryptjs from 'bcryptjs';
import crypto from 'crypto';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';
import { generateVerificationToken } from '../utils/generateVerificationToken.js';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import {
  sendPasswordResetEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from '../utils/emails.js';

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

export const verifyEmail = catchAsync(async (req, res) => {
  const { code } = req.body; // 1. Get the verification code from the request body

  // 2. Find the user by verification code and ensure the token is still valid
  const user = await User.findOne({
    verificationToken: code,
    verificationTokenExpiresAt: { $gt: Date.now() },
  });

  // console.log('User:', user);

  if (!user) {
    // If no user is found or the token is expired, return an error
    return res.status(400).json({
      success: false,
      message: 'Invalid or Expired verification token',
    });
  }

  // 3. Update the user status to verified and remove the verification token fields
  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiresAt = undefined;

  // Save the user updates to the database
  await user.save();

  // 4. Send a welcome email after verification
  await sendWelcomeEmail(user.email, user.firstName);

  // Send a success response
  res.status(200).json({
    success: true,
    message: 'Email verified successfully! Welcome email has been sent.',
    user: {
      ...user._doc,
      password: undefined,
      confirmPassword: undefined,
    },
  });
});

export const login = catchAsync(async (req, res) => {
  // Get user input from request body
  const { email, password = '', username } = req.body;

  //find the user by email or username
  const user = await User.findOne({ $or: [{ email }, { username }] });
  // const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid credentials' });
  }

  //check if password is correct
  const isPasswordValid = await bcryptjs.compare(password, user.password);

  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid credentials' });
  }

  //Check if user is verified
  if (!user.isVerified) {
    return res
      .status(400)
      .json({ success: false, message: 'Email not verified' });
  }

  //Creating the JWT and Setting a Cookie
  generateTokenAndSetCookie(res, user._id);

  //Update last login date

  user.lastlogin = Date.now();

  //save the user
  await user.save();

  // Send a success response

  res.status(200).json({
    success: true,
    message: 'Logged in successfully',
    user: {
      ...user._doc,
      password: undefined,
      confirmPassword: undefined,
    },
  });
});

export const logout = catchAsync(async (req, res) => {
  res.clearCookie('authToken');
  res.status(200).json({ success: true, message: 'Logged out successfully' });
});

export const forgotPassword = catchAsync(async (req, res) => {
  // Extract email from request body
  const { email } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  // check if user exists
  if (!user) {
    return res.status(400).json({ success: false, message: 'User not found' });
  }

  // Generate a reset token and expiration date
  const resetToken = crypto.randomBytes(20).toString('hex');
  const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

  // Update the user with the reset token and expiration date
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpiresAt = resetTokenExpiresAt;
  await user.save();
  // Send a reset password email with the reset token link to the user email address (use the sendResetPasswordEmail function) and return a success response
  await sendPasswordResetEmail(user.email, resetToken);
  // await sendPasswordResetEmail(
  //   user.email,
  //   `${process.env.CLIENT_URL}/reset-password/${resetToken}`
  // );

  res.status(200).json({
    success: true,
    message: 'Password reset email sent successfully',
  });
});

export const resetPassword = catchAsync(async (req, res) => {
  // Extract the reset token and new password from the request param and  body
  const { token } = req.params;
  const { password, confirmPassword } = req.body;

  // Token and password check
  if (!token || !password || !confirmPassword) {
    return res
      .status(400)
      .json({ success: false, message: 'Token and password required' });
  } else if (password.length < 6) {
    return res
      .status(400)
      .json({
        success: false,
        message: 'Password must be at least 6 characters',
      });
  }

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ success: false, message: 'Passwords do not match' });
  }

  // Find the user by reset token and ensure the token is still valid
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpiresAt: { $gt: Date.now() },
  });

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid or expired reset token' });
  }

  // Hash the new password and update the user's password
  const hashedPassword = await bcryptjs.hash(password, 10);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpiresAt = undefined;

  // Save the user updates to the database
  await user.save();

  // Send a password reset success email
  await sendResetSuccessEmail(user.email);

  // Send a success response
  res.status(200).json({ success: true, message: 'Password reset successful' });
});
