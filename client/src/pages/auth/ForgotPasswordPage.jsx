import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import toast from 'react-hot-toast';

const ForgotPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    token: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { forgotPassword, isLoading, message, error, resetPassword } =
    useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      // Handle sending reset token
      try {
        await forgotPassword(formData.email);
        toast.success('Reset token sent to your email');
        setStep(2);
      } catch (error) {
        toast.error(error.message || 'Failed to send reset token');
      }
    } else {
      // Handle password reset
      console.log('Resetting password with token:', formData.token);
      // Add logic for resetting password here
      if (formData.newPassword !== formData.confirmPassword) {
        return toast.error('Passwords do not match');
      }

      try {
        await resetPassword(
          formData.token,
          formData.newPassword,
          formData.confirmPassword
        );
        toast.success('Password reset successfully');
        navigate('/login'); // Navigate to login page after successful password reset
      } catch (error) {
        toast.error(error.message || 'Failed to reset password');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
          <p className="mt-2 text-gray-600">
            {step === 1
              ? 'Enter your email to receive a reset token'
              : 'Enter the token and your new password'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 1 ? (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="token"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Reset Token
                </label>
                <input
                  id="token"
                  name="token"
                  type="text"
                  required
                  value={formData.token}
                  onChange={(e) =>
                    setFormData({ ...formData, token: e.target.value })
                  }
                  className="pl-4 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the token from your email"
                />
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  New Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    required
                    value={formData.newPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, newPassword: e.target.value })
                    }
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </>
          )}
          {message && <p className="text-sm text-green-500">{message}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {step === 1 ? 'Send Reset Token' : 'Reset Password'}

            {isLoading && <span className="ml-2 animate-spin">...</span>}
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Remember your password?{' '}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
