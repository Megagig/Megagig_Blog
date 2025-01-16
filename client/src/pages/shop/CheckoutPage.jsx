import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CreditCard, Shield } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Complete Web Development Course',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  },
  // ... other products
];

const CheckoutPage = () => {
  const { id } = useParams();
  const [paymentMethod, setPaymentMethod] = useState('flutterwave');

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handlePayment = () => {
    // Here you would integrate with Flutterwave or Paystack
    console.log(`Processing payment via ${paymentMethod}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Order Summary */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-medium">{product.title}</h3>
                  <p className="text-blue-600 font-bold">${product.price}</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${product.price}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">${product.price}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Method */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>

              <div className="space-y-4">
                <label className="block">
                  <input
                    type="radio"
                    name="payment"
                    value="flutterwave"
                    checked={paymentMethod === 'flutterwave'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className="font-medium">Flutterwave</span>
                </label>

                <label className="block">
                  <input
                    type="radio"
                    name="payment"
                    value="paystack"
                    checked={paymentMethod === 'paystack'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className="font-medium">Paystack</span>
                </label>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                  <Shield className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-medium">Secure Payment</h3>
                    <p className="text-sm text-gray-500">
                      Your payment is protected
                    </p>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <CreditCard size={20} />
                  Pay ${product.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
