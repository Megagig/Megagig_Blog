import express from 'express';
import {
  checkAuth,
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from '../controllers/authController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = express.Router();
router.get('/check-auth', authenticateUser, checkAuth);
router.post('/signup', signup);
router.post('/verify-email', verifyEmail);

router.post('/login', login);

router.post('/logout', logout);

router.post('/forgot-password', forgotPassword);
router.post('/reset-passwrod/:token', resetPassword);

export default router;
