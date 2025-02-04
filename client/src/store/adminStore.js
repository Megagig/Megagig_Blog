import { create } from 'zustand';
import axios from '../lib/axios';

// Create the Zustand store
const useAdminStore = create((set) => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await axios.get('/admin/users');
      set({ users: response.data, isLoading: false });
    } catch (error) {
      set({
        error:
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'Failed to fetch users',
        isLoading: false,
      });
    }
  },

  updateUserRole: async (userId, role) => {
    try {
      set({ isLoading: true, error: null });
      await axios.patch(`/admin/users/${userId}/role`, { role });
      const response = await axios.get('/admin/users');
      set({ users: response.data, isLoading: false });
    } catch (error) {
      set({
        error:
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'Failed to update user role',
        isLoading: false,
      });
    }
  },

  updateUserStatus: async (userId, status) => {
    try {
      set({ isLoading: true, error: null });
      await axios.patch(`/admin/users/${userId}/status`, { status });
      const response = await axios.get('/admin/users');
      set({ users: response.data, isLoading: false });
    } catch (error) {
      set({
        error:
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'Failed to update user status',
        isLoading: false,
      });
    }
  },

  deleteUser: async (userId) => {
    try {
      set({ isLoading: true, error: null });
      await axios.delete(`/admin/users/${userId}`);
      set((state) => ({
        users: state.users.filter((user) => user.id !== userId),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error:
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'Failed to delete user',
        isLoading: false,
      });
    }
  },

  clearError: () => {
    set({ error: null });
  },
}));

export default useAdminStore;
