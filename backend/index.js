import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/user.Route.js';
import postRoute from './routes/post.Route.js';
import commentRoute from './routes/comment.Route.js';
import projectRoute from './routes/project.Route.js';
import connectDB from './lib/connectDB.js';

const app = express();

dotenv.config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);

app.use(express.json());
const PORT = process.env.PORT || 5000;

// ALL ROUTES GO HERE

app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/comments', commentRoute);
app.use('/api/v1/projects', projectRoute);

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

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
