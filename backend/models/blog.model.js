import mongoose from 'mongoose';
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'Development',
        'Tutorial',
        'Databases',
        'Marketing',
        'Web Design',
        'WordPress',
      ],
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    featuredImage: {
      url: String,
      filename: String,
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    excerpt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
// Add indexes for better query performance
blogSchema.index({ title: 'text', content: 'text' });
blogSchema.index({ status: 1, createdAt: -1 });
blogSchema.index({ category: 1 });
blogSchema.index({ author: 1 });
// Add a pre-save middleware to automatically generate excerpt if not provided
blogSchema.pre('save', function (next) {
  if (!this.excerpt && this.content) {
    // Generate excerpt from content (first 160 characters)
    this.excerpt = this.content
      .replace(/\s+/g, ' ')
      .replace(/<[^>]+>/g, '')
      .trim()
      .substring(0, 160);
    if (this.content.length > 160) {
      this.excerpt += '...';
    }
  }
  next();
});
// Add virtual for formatted date
blogSchema.virtual('formattedDate').get(function () {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});
// Method to check if user can perform action
blogSchema.methods.canPerformAction = function (userId, action) {
  switch (action) {
    case 'edit':
    case 'delete':
      return this.author.toString() === userId.toString();
    case 'view':
      return true;
    default:
      return false;
  }
};
export default mongoose.model('Blog', blogSchema);
