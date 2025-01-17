import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.Route.js';
import userRoute from './routes/user.Route.js';
import postRoute from './routes/post.Route.js';
import commentRoute from './routes/comment.Route.js';
import projectRoute from './routes/project.Route.js';
import connectDB from './lib/connectDB.js';
import catchAsync from './lib/catchAsync.js';
import AppError from './lib/appError.js';
import globalErrorHandler from './controllers/errorController.js';

const app = express();

dotenv.config();

app.use(express.json());
const PORT = process.env.PORT || 5000;

// ALL ROUTES GO HERE
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/comments', commentRoute);
app.use('/api/v1/projects', projectRoute);

//handle not found routes

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
