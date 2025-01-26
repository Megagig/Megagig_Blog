// backend/models/product.model.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    features: [
      {
        type: String,
        trim: true,
      },
    ],
    requirements: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Course', 'Template', 'Components', 'Service'],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    images: [
      {
        url: String,
        filename: String,
      },
    ],
    type: {
      type: String,
      enum: ['digital', 'service'],
      default: 'digital',
    },
    status: {
      type: String,
      enum: ['active', 'draft', 'archived'],
      default: 'draft',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    sales: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
