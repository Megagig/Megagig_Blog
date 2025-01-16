import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/user.Route.js';
import postRoute from './routes/post.Route.js';
import commentRoute from './routes/comment.Route.js';
import projectRoute from './routes/project.Route.js';

const app = express();

dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

// ALL ROUTES GO HERE

app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/comments', commentRoute);
app.use('/api/v1/projects', projectRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
