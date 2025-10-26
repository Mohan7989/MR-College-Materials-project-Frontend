import axios from 'axios';

const BASE_URL = 'https://new-4rqi.onrender.com/api/materials';

export const getApprovedMaterials = () =>
  axios.get(`${BASE_URL}/approved`).then(res => res.data);

export const getPendingMaterials = () =>
  axios.get(`${BASE_URL}/pending`).then(res => res.data);

export const uploadMaterial = data =>
  axios.post(`${BASE_URL}/upload`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(res => res.data);

export const approveMaterial = id =>
  axios.put(`${BASE_URL}/approve/${id}`).then(res => res.data);
