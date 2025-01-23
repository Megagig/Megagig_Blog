import blog from '../../models/admin/blog.js';

export const createBlog = async (req, res) => {
  res.send('create blog').status(200);
};

export const getAllBlogs = async (req, res) => {};

export const updateBlog = async (req, res) => {};

export const deleteBlog = async (req, res) => {};

export const getBlogById = async (req, res) => {};

export const getBlogsByCategory = async (req, res) => {};

export const getBlogsByAuthor = async (req, res) => {};

export const getBlogsByStatus = async (req, res) => {};

export const searchBlogs = async (req, res) => {};

export const getBlogCategories = async (req, res) => {};

export const getBlogStats = async (req, res) => {};
