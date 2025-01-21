import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(new Array(6).fill(''));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newToken = [...token];
      newToken[index] = value;
      setToken(newToken);

      // Move to the next input field if a digit is entered
      if (value !== '' && index < 5) {
        document.getElementById(`token-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationToken = token.join('');
    // Handle token verification logic here
    console.log('Verification token:', verificationToken);
    // Redirect to the login page after successful verification
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Verify Email</h2>
          <p className="mt-2 text-gray-600">
            Enter the 6-digit verification code sent to your email
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2">
            {token.map((digit, index) => (
              <input
                key={index}
                id={`token-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ))}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
