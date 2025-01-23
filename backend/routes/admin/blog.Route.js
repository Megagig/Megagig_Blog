import express from 'express';
import { createBlog } from '../../controllers/admin/blogController.js';

const router = express.Router();

router.post('/', createBlog);

export default router;
