import { useState } from 'react';
import { Search, Filter, Trash2, Edit, Eye, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EditProductModal from '../modals/EditProductModal'; // Import EditProductModal
import ViewProductModal from '../modals/ViewProductModal'; // Import ViewProductModal
import DeleteProductModal from '../modals/DeleteProductModal'; // Import DeleteProductModal

// Mock data for demonstration
const products = [
  {
    id: 1,
    title: 'Complete Web Development Course',
    category: 'Course',
    price: 199.99,
    status: 'Active',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    sales: 145,
    stock: 'Digital',
    rating: 4.8,
    description: 'Learn web development from scratch.',
    type: 'digital',
  },
  // Add more mock products...
];

const AllProducts = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const openViewModal = (product) => {
    setSelectedProduct(product);
    setIsViewModalOpen(true);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const closeModals = () => {
    setSelectedProduct(null);
    setIsEditModalOpen(false);
    setIsViewModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = (id) => {
    console.log('Delete product:', id);
    // Logic to delete the product from the list
    closeModals();
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
        <button
          onClick={() => navigate('/admin/products/new')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Product
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Categories</option>
                <option value="Course">Course</option>
                <option value="Template">Template</option>
                <option value="Component">Component</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Product
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Category
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Price
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Sales
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Rating
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <span className="font-medium text-gray-900">
                          {product.title}
                        </span>
                        <span className="block text-sm text-gray-500">
                          {product.date}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-gray-900">
                      <DollarSign size={16} />
                      <span>{product.price}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{product.sales}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-600">{product.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(product)}
                        className="p-1 text-gray-600 hover:text-blue-600"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => openViewModal(product)}
                        className="p-1 text-gray-600 hover:text-blue-600"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => openDeleteModal(product)}
                        className="p-1 text-gray-600 hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={closeModals}
        onSubmit={(updatedProduct) => {
          console.log('Updated product:', updatedProduct);
          // Logic to update the product
          closeModals();
        }}
        product={selectedProduct}
      />
      <ViewProductModal
        isOpen={isViewModalOpen}
        onClose={closeModals}
        product={selectedProduct}
      />
      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={closeModals}
        onConfirm={() => handleDelete(selectedProduct.id)}
        product={selectedProduct}
      />
    </div>
  );
};

export default AllProducts;
