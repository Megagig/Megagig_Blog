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

const isAuthorized = (...roles) => {
  return catchAsync(async (req, res, next) => {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const hasPermission = roles.some((role) => {
      if (role === 'admin' && user.isAdmin) return true;
      if (role === 'moderator' && user.isModerator) return true;
      if (role === 'user' && user.isUser) return true;
      return false;
    });

    if (!hasPermission) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to perform this action.',
      });
    }

    next();
  });
};

export { authenticateUser, isAuthorized };
