import jwt from 'jsonwebtoken';
import User from '../models/user.Model.js';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';

const authentication = catchAsync(async (req, res, next) => {
  // 1. Get the token from headers
  let idToken = '';
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Bearer asfdasdfhjasdflkkasdf
    idToken = req.headers.authorization.split(' ')[1];
  }
  if (!idToken) {
    return next(new AppError('Please login to get access', 401));
  }

  // 2. Token verification
  const tokenDetail = jwt.verify(idToken, process.env.JWT_SECRET);

  // 3. Get the user detail from db and add to req object
  const freshUser = await User.findById(tokenDetail.id);

  if (!freshUser) {
    return next(new AppError('User no longer exists', 400));
  }
  req.user = freshUser;
  return next();
});

const authorization = (...userTypes) => {
  const checkPermission = (req, res, next) => {
    if (!userTypes.includes(req.user.userType)) {
      return next(
        new AppError("You don't have permission to perform this action", 403)
      );
    }
    return next();
  };

  return checkPermission;
};

export { authentication, authorization };
