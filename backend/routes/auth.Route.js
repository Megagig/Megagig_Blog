import express from 'express';
import {
  forgotPassword,
  login,
  logout,
  signup,
  verifyEmail,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/verify-email', verifyEmail);

router.post('/login', login);

router.post('/logout', logout);

router.post('/forgot-passwrod', forgotPassword);

export default router;
