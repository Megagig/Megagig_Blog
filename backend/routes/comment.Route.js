import express from 'express';

import {
  createComment,
  deleteComment,
  getAllComments,
  getTotalComments,
} from '../controllers/commentController.js';

const router = express.Router();

router.post('/', createComment);
router.get('/', getAllComments);
router.get('/total-comments', getTotalComments);
router.delete('/:commentId', deleteComment);

export default router;
