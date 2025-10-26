// Add any centralized admin API calls here as needed, such as user management, analytics.
import axios from 'axios';

const BASE_URL = 'https://new-4rqi.onrender.com/api/admin';

export const loginAdmin = (credentials) =>
  axios.post(`${BASE_URL}/login`, credentials).then(res => res.data);

// Add more admin-only actions here (e.g., create, delete, summary endpoints)
