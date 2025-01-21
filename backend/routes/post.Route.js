import express from 'express';

import {
  createPost,
  deletePost,
  getAllPosts,
  getPostBySlug,
  updatePost,
} from '../controllers/postControllers.js';
import {
  authenticateUser,
  authorization,
} from '../middleware/authenticateUser.js';

const router = express.Router();

router.post(
  '/',
  authenticateUser,
  authorization('admin', 'moderator'),
  createPost
);
router.get('/', getAllPosts);
router.get('/:slug', getPostBySlug);
router.put(
  '/:slug',
  authenticateUser,
  authorization('admin', 'moderator'),
  updatePost
);
router.delete('/:slug', authenticateUser, authorization('admin'), deletePost);
export default router;
