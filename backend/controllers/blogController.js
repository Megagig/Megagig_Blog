import Post from '../models/post.model.js';
import User from '../models/user.Model.js';
import catchAsync from '../lib/catchAsync.js';

// CREATE A NEW BLOG POST
export const createBlogPost = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  if (!userId) {
    return res.status(401).json('Not authenticated!');
  }
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json('User not found!');
  }

  let slug = req.body.title.replace(/ /g, '-').toLowerCase();

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });

  const post = await newPost.save();
  res.status(201).json({ message: 'Post created successfully', post });
});

// GET ALL BLOG POSTS
export const getAllBlogPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find().populate('user', 'username email');
  res.status(200).json(posts);
});

export const updateBlogPost = catchAsync(async (req, res, next) => {
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

export const deleteBlogPost = catchAsync(async (req, res, next) => {
  const deletedPost = await Post.findOneAndDelete({ slug: req.params.slug });
  if (!deletedPost) {
    return next(new AppError('Post not found', 404));
  }
  res.status(200).json({ message: 'Post deleted successfully' });
});

export const getBlogPostById = catchAsync(async (req, res, next) => {});

// GET A BLOG POST BY SLUG
export const getBlogPostBySlug = catchAsync(async (req, res, next) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post) {
    return next(new AppError('Post not found', 404));
  }
  res.status(200).json(post);
});

export const getBlogsByCategory = async (req, res) => {};

export const getBlogsByAuthor = async (req, res) => {};

export const getBlogsByStatus = async (req, res) => {};

export const searchBlogs = async (req, res) => {};

export const getBlogCategories = async (req, res) => {};

export const getBlogStats = async (req, res) => {};
