import Product from '../models/product.model.js';
import catchAsync from '../lib/catchAsync.js';
import AppError from '../lib/appError.js';

export const createProduct = catchAsync(async (req, res, next) => {
  const {
    title,
    description,
    features,
    requirements,
    category,
    price,
    images,
    type,
    status,
  } = req.body;

  const newProduct = new Product({
    title,
    description,
    category,
    features,
    requirements,
    price,
    images,
    type,
    status,
    author: req.userId,
  });

  await newProduct.save();

  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    product: newProduct,
  });
});

export const getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find().populate('author', 'username email');
  res.status(200).json({
    success: true,
    products,
  });
});

export const getSingleProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate(
    'author',
    'username email'
  );

  if (!product) {
    return next(new AppError('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

export const updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const {
    title,
    description,
    features,
    requirements,
    category,
    price,
    images,
    type,
    status,
  } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      title,
      description,
      category,
      features,
      requirements,
      price,
      images,
      type,
      status,
    },
    { new: true, runValidators: true }
  ).populate('author', 'username email');

  if (!updatedProduct) {
    return next(new AppError('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Product updated successfully',
    product: updatedProduct,
  });
});

export const deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    return next(new AppError('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Product deleted successfully',
  });
});
