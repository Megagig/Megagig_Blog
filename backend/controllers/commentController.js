import catchAsync from '../lib/catchAsync.js';
import Comment from '../models/comment.model.js';

// Create comment (protected route)
export const createComment = catchAsync(async (req, res, next) => {
  const { comment, postId, user } = req.body;
  const newComment = new Comment({
    comment,
    user,
    postId,
  });
  await newComment.save();
  res
    .status(201)
    .send({ message: 'Comment posted successfully', comment: newComment });
});
