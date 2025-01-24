import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.Route.js';
import userRoute from './routes/user.Route.js';
import blogRoute from './routes/blog.Route.js';
import projectRoute from './routes/project.Route.js';
import connectDB from './lib/connectDB.js';
import AppError from './lib/appError.js';
import globalErrorHandler from './controllers/errorController.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(
  cors({
    origin: ' http://localhost:5173',
    credentials: true,
  })
);

dotenv.config();

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

// ALL ROUTES GO HERE
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/projects', projectRoute);

// HANDLE 404 ERROR
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

const start = async () => {
  try {
    // Connect to the database
    await connectDB(process.env.MONGODB_URI);
    console.log('Database connection established');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the application:', error);
    process.exit(1); // Exit the process if there is an error
  }
};

start();
