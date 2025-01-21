import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/auth';

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  isCheckingAuth: true,

  signup: async (
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword
  ) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        firstName,
        lastName,
        email,
        username,
        password,
        confirmPassword,
      });
      const data = response.data;
      set({ user: data.user, isLoading: false, isAuthenticated: true });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      console.log(error.response);
      throw error;
    }
  },
}));
