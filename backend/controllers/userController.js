import User from '../models/user.Model.js';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';

export const getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    results: users.length,
    data: {
      users,
    },
  });
});

export const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({
    success: true,
    data: {
      user,
    },
  });
});

export const updateUserRole = catchAsync(async (req, res, next) => {
  const { userId, role } = req.body;

  // console.log('Request Body:', req.body); // Add logging

  if (!userId || !role) {
    return next(new AppError('User ID and role are required', 400));
  }

  const user = await User.findById(userId);

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  // Reset all role fields to false
  user.isAdmin = false;
  user.isModerator = false;
  user.isUser = false;

  // Set the appropriate role field to true
  if (role === 'admin') {
    user.isAdmin = true;
  } else if (role === 'moderator') {
    user.isModerator = true;
  } else if (role === 'user') {
    user.isUser = true;
  } else {
    return next(new AppError('Invalid role', 400));
  }

  await user.save();

  res.status(200).json({
    success: true,
    message: 'User role updated successfully',
    user,
  });
});
