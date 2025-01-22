import { X, DollarSign } from 'lucide-react';

const ViewProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">View Product</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                {product.category}
              </span>
              <div className="flex items-center text-gray-900 font-medium">
                <DollarSign size={16} />
                <span>{product.price}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Description</h4>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-500">Type</span>
              <p className="font-medium">{product.type}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Status</span>
              <p className="font-medium">{product.status}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Sales</span>
              <p className="font-medium">{product.sales}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Rating</span>
              <p className="font-medium">{product.rating} ★</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductModal;
