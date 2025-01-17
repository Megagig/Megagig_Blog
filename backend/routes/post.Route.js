import express from 'express';

import {
  createPost,
  deletePost,
  getAllPosts,
  getPostBySlug,
  updatePost,
} from '../controllers/postControllers.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:slug', getPostBySlug);
router.put('/:slug', updatePost);
router.delete('/:slug', deletePost);
export default router;
