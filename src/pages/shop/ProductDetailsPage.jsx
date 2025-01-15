import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Shield, Clock, Award } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Complete Web Development Course',
    price: 199.99,
    category: 'Course',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    ],
    description: `Master web development from scratch with this comprehensive course. Perfect for beginners and intermediate developers looking to level up their skills.

Features:
• 50+ hours of video content
• 100+ coding exercises
• Real-world projects
• Lifetime access
• Certificate of completion
• Community access

Technologies covered:
• HTML5 & CSS3
• JavaScript (ES6+)
• React.js
• Node.js
• MongoDB
• REST APIs`,
    type: 'Digital Product',
    rating: 4.8,
    sales: 1234,
    features: [
      'Lifetime Access',
      'Project Files Included',
      'Premium Support',
      'Regular Updates',
    ],
  },
  // ... other products
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(0);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handlePurchase = () => {
    navigate(`/checkout/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Images */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={product.images[mainImage]}
                  alt={product.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(index)}
                    className={`rounded-lg overflow-hidden border-2 transition ${
                      mainImage === index
                        ? 'border-blue-600'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">
                  {product.sales.toLocaleString()} sales
                </span>
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-6">
                ${product.price}
              </div>

              <div className="space-y-4 mb-8">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <Award size={20} className="text-blue-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Shield className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-medium">Secure Payment</h3>
                    <p className="text-sm text-gray-500">
                      Protected by Flutterwave
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-medium">Instant Access</h3>
                    <p className="text-sm text-gray-500">Immediate delivery</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Purchase Now
              </button>
            </div>
          </div>

          {/* Product Description */}
          <div className="border-t border-gray-100 p-8">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <div className="prose max-w-none">
              {product.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
