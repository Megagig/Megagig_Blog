import express from 'express';
import {
  createBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  getAllBlogs,
  getBlogPostById,
  updateBlogPost,
} from '../controllers/blogController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = express.Router();

router.post('/', authenticateUser, createBlogPost);
router.get('/', getAllBlogPosts);
router.patch('/:id', updateBlogPost);
router.get('/:id', getBlogPostById);
router.get('/admin', getAllBlogs); // Admin Dashboard

router.delete('/:id', deleteBlogPost);

export default router;
