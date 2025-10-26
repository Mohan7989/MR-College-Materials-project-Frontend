import axios from 'axios';
import { API_BASE_URL } from '../constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Materials API
export const materialsAPI = {
  getApproved: () => api.get('/materials/approved'),
  getPending: () => api.get('/materials/pending'),
  upload: (formData) => api.post('/materials/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  approve: (id) => api.post(`/materials/approve/${id}`),
  delete: (id) => api.delete(`/materials/delete/${id}`)
};

// Notices API
export const noticesAPI = {
  getAll: () => api.get('/notices/all'),
  add: (notice) => api.post('/notices/add', notice)
};

// Internships API
export const internshipsAPI = {
  getAll: () => api.get('/internships/all'),
  add: (internship) => api.post('/internships/add', internship)
};

// Timetables API
export const timetablesAPI = {
  getActive: () => api.get('/timetables/active'),
  getAll: () => api.get('/timetables/all'),
  add: (timetable) => api.post('/timetables/add', timetable)
};

// Admin API
export const adminAPI = {
  login: (password) => api.post('/admin/login', null, { 
    params: { password } 
  })
};

export default api;