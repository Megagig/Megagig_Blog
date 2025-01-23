import express from 'express';
import {
  authenticateUser,
  authorization,
} from '../middleware/authenticateUser.js';
import {
  getUsers,
  getUser,
  updateUserRole,
} from '../controllers/userController.js';

const router = express.Router();

router.patch(
  '/update-role',
  authenticateUser,
  authorization('admin'),
  updateUserRole
);
router.get('/', authenticateUser, authorization('admin'), getUsers);
router.get('/:id', authenticateUser, authorization('admin'), getUser);

export default router;
