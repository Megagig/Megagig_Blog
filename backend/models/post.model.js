import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    img: {
      type: String,
    },

    title: {
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
      default: 'Development',
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', postSchema);
