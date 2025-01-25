import express from 'express';
import {
  createBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
} from '../controllers/blogController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = express.Router();

router.post('/', authenticateUser, createBlogPost);
router.get('/', getAllBlogPosts);
router.put('/:slug', updateBlogPost);
router.get('/:id', getBlogPostById);

router.delete('/:id', deleteBlogPost);

export default router;
