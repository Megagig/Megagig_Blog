import express from 'express';
import { createProject } from '../controllers/projectController.js';

const router = express.Router();

router.get('/', createProject);

export default router;
