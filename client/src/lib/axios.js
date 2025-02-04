import axios from 'axios';

// Replace with your API base URL
const API_BASE_URL = 'http://localhost:3000/api/v1/auth';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 401) {
      // Handle token expiration
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Example usage
const getData = async () => {
  try {
    const response = await axiosInstance.get('/your-endpoint');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default axiosInstance;
export { getData };
