import express from 'express';
import {
  authenticateUser,
  isAuthorized,
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
  isAuthorized('admin'),
  updateUserRole
);
router.get('/', authenticateUser, isAuthorized('admin'), getUsers);
router.get('/:id', authenticateUser, isAuthorized('admin'), getUser);

export default router;
