import AppError from '../lib/appError.js';

const sendErrorDev = (error, res) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || 'error';
  const message = error.message;
  const stack = error.stack;
  res.status(statusCode).json({
    status,
    message,
    stack,
  });
};

const sendErrorProd = (error, res) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || 'error';
  const message = error.message;

  if (error.isOperational) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  console.error('ERROR 💥', error);
  return res.status(500).json({
    status: 'error',
    message: 'Something went very wrong',
  });
};

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.keyValue ? Object.values(err.keyValue).join(', ') : '';
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;

    if (err.name === 'CastError') error = handleCastErrorDB(error);
    if (err.code === 11000) error = handleDuplicateFieldsDB(error);
    if (err.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (err.name === 'JsonWebTokenError')
      error = new AppError('Invalid token', 401);
    if (err.name === 'TokenExpiredError')
      error = new AppError('Token expired', 401);

    sendErrorProd(error, res);
  }
};

export default globalErrorHandler;
