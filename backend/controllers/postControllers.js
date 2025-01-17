import Post from '../models/post.model.js';
import User from '../models/user.Model.js';
import catchAsync from '../lib/catchAsync.js';

// Create a new post
export const createPost = catchAsync(async (req, res, next) => {
  const newPost = new Post(req.body);
  const savedPost = await newPost.save();
  res
    .status(201)
    .json({ message: 'Post created successfully', post: savedPost });
});

// Get all posts
export const getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find().populate('user', 'username email');
  res.status(200).json(posts);
});

// Get a single post by slug
export const getPostBySlug = catchAsync(async (req, res, next) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post) {
    return next(new AppError('Post not found', 404));
  }
  res.status(200).json(post);
});

// Update a post
export const updatePost = catchAsync(async (req, res, next) => {
  const updatedPost = await Post.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedPost) {
    return next(new AppError('Post not found', 404));
  }
  res
    .status(200)
    .json({ message: 'Post updated successfully', post: updatedPost });
});

// Delete a post
export const deletePost = catchAsync(async (req, res, next) => {
  const deletedPost = await Post.findOneAndDelete({ slug: req.params.slug });
  if (!deletedPost) {
    return next(new AppError('Post not found', 404));
  }
  res.status(200).json({ message: 'Post deleted successfully' });
});
