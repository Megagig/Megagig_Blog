import express from 'express';
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = express.Router();

router.post('/', authenticateUser, createProduct);
router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.patch('/:id', authenticateUser, updateProduct);
router.delete('/:id', authenticateUser, deleteProduct);

export default router;
