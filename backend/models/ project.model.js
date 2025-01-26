import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'Web Development',
        'Mobile Development',
        'Wordpress',
        'Artificial Intelligence',
        'Other',
      ],
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    github: {
      type: String,
      trim: true,
    },
    live: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: [
        'draft',
        'in-progress',
        'completed',
        'on-hold',
        'cancelled',
        'published',
      ],
      default: 'draft',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    featuredImage: {
      url: String,
      filename: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
