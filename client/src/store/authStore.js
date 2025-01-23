import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/auth';

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  isCheckingAuth: true,
  message: null,

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
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      const data = response.data;
      set({ user: data.user, isLoading: false, isAuthenticated: true });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      console.log(error.response);
      throw error;
    }
  },
  login: async (identifier, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        // Send either email or username as identifier
        email: identifier.includes('@') ? identifier : undefined,
        username: identifier.includes('@') ? undefined : identifier,
        password,
      });
      const data = response.data;
      set({ user: data.user, isLoading: false, isAuthenticated: true });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      console.log(error.response);
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      const data = response.data;
      if (data.user) {
        set({ isAuthenticated: true, user: data.user, isCheckingAuth: false });
      } else {
        set({ isAuthenticated: false, user: null, isCheckingAuth: false });
      }
    } catch (error) {
      set({ error: error.message, isCheckingAuth: false, user: null });
      console.log(error.response);
      throw error;
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      const data = response.data;
      console.log(data.message);
      set({ isLoading: false, message: data.message });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      console.log(error);
    }
  },

  resetPassword: async (token, newPassword, confirmPassword) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/reset-passwrod/${token}`, {
        newPassword,
        confirmPassword,
      });
      const data = response.data;
      console.log(data.message);
      set({ isLoading: false, message: data.message });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      console.log(error);
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/logout`);
      const data = response.data;
      console.log(data.message);
      set({
        user: null,
        isLoading: false,
        isAuthenticated: false,
        message: data.message,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      console.log(error.response);
      throw error;
    }
  },
}));
