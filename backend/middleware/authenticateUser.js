import jwt from 'jsonwebtoken';
import User from '../models/user.Model.js';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';

const authenticateUser = catchAsync(async (req, res, next) => {
  // 1. Get the token from cookies or headers
  let token = req.cookies.authToken || '';
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // 2. check if the token exists
  if (!token) {
    return next(new AppError('Please login to get access', 401));
  }

  // 3. Token verification
  let tokenDetail;
  try {
    tokenDetail = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);

    return next(new AppError('Invalid token, please log in again', 401));
  }

  // 4. Get the user detail from the database
  const user = await User.findById(tokenDetail.id);
  if (!user) {
    return next(new AppError('User no longer exists', 400));
  }

  // 5. Attach user to the request object
  req.user = user;
  next();
});

const authorization = (...roles) => {
  const checkPermission = (req, res, next) => {
    const { user } = req;
    if (!user) {
      return next(new AppError('User not found', 404));
    }

    const hasPermission = roles.some((role) => {
      if (role === 'admin' && user.isAdmin) return true;
      if (role === 'moderator' && user.isModerator) return true;
      if (role === 'user' && user.isUser) return true;
      return false;
    });

    if (!hasPermission) {
      return next(
        new AppError("You don't have permission to perform this action", 403)
      );
    }

    next();
  };

  return checkPermission;
};

export { authenticateUser, authorization };
