import { useState } from 'react';
import { Search, Edit, Eye, Trash2, DollarSign } from 'lucide-react';
import EditProductModal from '../modals/EditProductModal'; // Import EditProductModal
import ViewProductModal from '../modals/ViewProductModal'; // Import ViewProductModal
import DeleteProductModal from '../modals/DeleteProductModal'; // Import DeleteProductModal

const draftProducts = [
  {
    id: 1,
    title: 'Advanced React Course 2024',
    category: 'Course',
    price: 199.99,
    lastModified: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    status: 'Draft',
  },
  {
    id: 2,
    title: 'Premium UI Components',
    category: 'Template',
    price: 49.99,
    lastModified: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
    status: 'Draft',
  },
];

const DraftProducts = () => {
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Draft Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          New Draft
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search drafts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Title
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Category
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Price
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Last Modified
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {draftProducts.map((product) => (
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
                      <span className="font-medium text-gray-900">
                        {product.title}
                      </span>
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
                  <td className="py-4 px-6 text-gray-600">
                    {product.lastModified}
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

export default DraftProducts;
