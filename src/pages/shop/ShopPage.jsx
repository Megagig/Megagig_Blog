import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Complete Web Development Course',
    price: 199.99,
    category: 'Course',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    type: 'Digital Product',
    rating: 4.8,
    sales: 1234,
  },
  {
    id: 2,
    title: 'React.js Project Templates Bundle',
    price: 49.99,
    category: 'Template',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    type: 'Digital Product',
    rating: 4.6,
    sales: 856,
  },
  {
    id: 3,
    title: 'Premium UI Component Library',
    price: 79.99,
    category: 'Components',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
    type: 'Digital Product',
    rating: 4.9,
    sales: 2341,
  },
  {
    id: 4,
    title: '1-on-1 Development Consultation',
    price: 149.99,
    category: 'Service',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    type: 'Service',
    rating: 5.0,
    sales: 432,
  },
  {
    id: 5,
    title: 'E-commerce Starter Kit',
    price: 299.99,
    category: 'Template',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    type: 'Digital Product',
    rating: 4.7,
    sales: 678,
  },
  {
    id: 6,
    title: 'WordPress Theme Collection',
    price: 89.99,
    category: 'Template',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    type: 'Digital Product',
    rating: 4.5,
    sales: 1123,
  },
];

const categories = ['All', 'Course', 'Template', 'Components', 'Service'];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Products & Services
          </h1>
          <p className="text-xl text-blue-100">
            Premium development resources and professional services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <Filter size={20} className="text-gray-500" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  ${product.price}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {product.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {product.sales.toLocaleString()} sales
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-600">{product.rating}</span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <ShoppingBag size={20} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
