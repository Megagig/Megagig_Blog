import express from 'express';

import {
  createPost,
  deletePost,
  getAllPosts,
  getPostBySlug,
  updatePost,
} from '../controllers/postControllers.js';
import { authentication, authorization } from '../middleware/authentication.js';

const router = express.Router();

router.post(
  '/',
  authentication,
  authorization('admin', 'moderator'),
  createPost
);
router.get('/', getAllPosts);
router.get('/:slug', getPostBySlug);
router.put(
  '/:slug',
  authentication,
  authorization('admin', 'moderator'),
  updatePost
);
router.delete('/:slug', authentication, authorization('admin'), deletePost);
export default router;
