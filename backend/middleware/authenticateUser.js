import jwt from 'jsonwebtoken';
import User from '../models/user.Model.js';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';

const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: 'Unauthorized - no token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: 'Unauthorized - invalid token' });

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log('Error in verifyToken ', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const authorization = (...roles) => {
  const checkPermission = (req, res, next) => {
    const { userId } = req;
    if (!userId) {
      return next(new AppError('User not found', 404));
    }

    const hasPermission = roles.some((role) => {
      if (role === 'admin' && userId.isAdmin) return true;
      if (role === 'moderator' && userId.isModerator) return true;
      if (role === 'user' && userId.isUser) return true;
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
