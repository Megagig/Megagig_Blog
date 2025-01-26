import express from 'express';
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = express.Router();

router.post('/', authenticateUser, createProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.patch('/:id', authenticateUser, updateProject);
router.delete('/:id', authenticateUser, deleteProject);

export default router;
