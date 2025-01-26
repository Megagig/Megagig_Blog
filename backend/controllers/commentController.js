import AppError from '../lib/appError.js';
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

// Get all comments (public route)
export const getAllComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.find().populate('user', 'username email');
  res.status(200).json({ comments });
});

// Get total comments (private route for admin dashboard)
export const getTotalComments = catchAsync(async (req, res, next) => {
  const totalComments = await Comment.countDocuments({});
  res.status(200).send({ totalComments });
});

// Delete comment (protected route for admin dashboard)
export const deleteComment = catchAsync(async (req, res, next) => {
  const { commentId } = req.params;
  const comment = await Comment.findById(commentId);
  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }
  await Comment.findByIdAndDelete(commentId);
  res.status(200).send({ message: 'Comment deleted successfully' });
});

// Update comment (public route) - only the user who posted the comment can update it
export const updateComment = catchAsync(async (req, res, next) => {
  const { commentId } = req.params;
  const { comment } = req.body;
  const commentToUpdate = await Comment.findById(commentId);
  if (!commentToUpdate) {
    return next(new AppError('Comment not found', 404));
  }
  commentToUpdate.comment = comment;
  await commentToUpdate.save();
  res.status(200).send({ message: 'Comment updated successfully' });
});
