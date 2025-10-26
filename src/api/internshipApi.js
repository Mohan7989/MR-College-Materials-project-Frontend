import axios from 'axios';

const BASE_URL = 'https://new-4rqi.onrender.com/api/internships';

export const getInternships = () =>
  axios.get(BASE_URL).then(res => res.data);
