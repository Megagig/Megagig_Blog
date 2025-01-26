import Project from '../models/project.model.js';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';

export const createProject = catchAsync(async (req, res, next) => {
  const {
    title,
    description,
    category,
    technologies,
    github,
    live,
    status,
    featuredImage,
  } = req.body;

  const newProject = new Project({
    title,
    description,
    category,
    technologies,
    github,
    live,
    status,
    featuredImage,
    author: req.userId,
  });

  await newProject.save();

  res.status(201).json({
    success: true,
    message: 'Project created successfully',
    project: newProject,
  });
});

export const getAllProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find().populate('author', 'username email');
  res.status(200).json({
    success: true,
    projects,
  });
});

export const getProjectById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findById(id).populate(
    'author',
    'username email'
  );

  if (!project) {
    return next(new AppError('Project not found', 404));
  }

  res.status(200).json({
    success: true,
    project,
  });
});

export const updateProject = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const {
    title,
    description,
    category,
    technologies,
    github,
    live,
    status,
    featuredImage,
  } = req.body;

  const updatedProject = await Project.findByIdAndUpdate(
    id,
    {
      title,
      description,
      category,
      technologies,
      github,
      live,
      status,
      featuredImage,
    },
    { new: true, runValidators: true }
  ).populate('author', 'username email');

  if (!updatedProject) {
    return next(new AppError('Project not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Project updated successfully',
    project: updatedProject,
  });
});

export const deleteProject = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deletedProject = await Project.findByIdAndDelete(id);

  if (!deletedProject) {
    return next(new AppError('Project not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Project deleted successfully',
  });
});
