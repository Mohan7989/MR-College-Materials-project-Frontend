import { adminAPI } from './api';

export const adminService = {
  login: async (password) => {
    try {
      const response = await adminAPI.login(password);
      return response.data;
    } catch (error) {
      throw new Error('Admin login failed');
    }
  },

  verifySession: () => {
    // Check if admin is logged in (simple session check)
    return localStorage.getItem('adminLoggedIn') === 'true';
  },

  logout: () => {
    localStorage.removeItem('adminLoggedIn');
  },

  setSession: () => {
    localStorage.setItem('adminLoggedIn', 'true');
  }
};