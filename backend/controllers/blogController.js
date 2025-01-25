import Blog from '../models/blog.model.js';
import User from '../models/user.Model.js';
import Comment from '../models/comment.model.js';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';

// Create post (protected route)
export const createBlogPost = catchAsync(async (req, res, next) => {
  const { title, category, tags, featuredImage, content, excerpt, status } =
    req.body;

  const newPost = new Blog({
    ...req.body,
    author: req.userId,
  });
  await newPost.save();
  res.status(201).json({ message: 'Post created successfully', post: newPost });
});

// Get all posts (public route)
export const getAllBlogPosts = catchAsync(async (req, res) => {
  const { search, category, location, status, sortBy, limit, page } = req.query;

  let query = {};

  // Apply search filtering
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } },
    ];
  }

  // Apply category filtering
  if (category) query.category = category;

  // Apply location filtering
  if (location) query.location = location;

  // Apply status filtering (e.g., draft or published)
  if (status) query.status = status;

  // Set default pagination values
  const resultsPerPage = parseInt(limit) || 10; // Default to 10 results per page
  const currentPage = parseInt(page) || 1; // Default to page 1

  // Fetch posts with dynamic query and pagination
  const posts = await Blog.find(query)
    .populate('author', 'username email')
    .sort({ [sortBy || 'createdAt']: -1 }) // Default sort by `createdAt` in descending order
    .skip((currentPage - 1) * resultsPerPage)
    .limit(resultsPerPage);

  // Total count for pagination
  const totalPosts = await Blog.countDocuments(query);

  res.status(200).json({
    totalPosts,
    currentPage,
    totalPages: Math.ceil(totalPosts / resultsPerPage),
    posts,
  });
});

// retrieving the details of a single blog post by its unique ID, along with associated comments.
export const getBlogPostById = catchAsync(async (req, res, next) => {
  const postId = req.params.id;
  // console.log(postId);

  const post = await Blog.findById(postId).populate('author', 'username email');

  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  const comments = await Comment.find({ postId: postId }).populate(
    'user',
    'username email'
  );

  res.status(200).json({ post, comments });
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

export const getBlogsByCategory = async (req, res) => {};

export const getBlogsByAuthor = async (req, res) => {};

export const getBlogsByStatus = async (req, res) => {};

export const searchBlogs = async (req, res) => {};

export const getBlogCategories = async (req, res) => {};

export const getBlogStats = async (req, res) => {};
