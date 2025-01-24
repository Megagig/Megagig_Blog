import express from 'express';
import {
  createBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  getBlogPostBySlug,
  updateBlogPost,
} from '../controllers/blogController.js';

const router = express.Router();

router.post('/', createBlogPost);
router.get('/', getAllBlogPosts);
router.put('/:slug', updateBlogPost);
router.get('/:slug', getBlogPostBySlug);

router.delete('/:slug', deleteBlogPost);

export default router;
