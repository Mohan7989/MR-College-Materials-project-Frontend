import axios from 'axios';

const BASE_URL = 'https://new-4rqi.onrender.com/api/timetables';

export const getActiveTimetables = () =>
  axios.get(`${BASE_URL}/active`).then(res => res.data);

export const getAllTimetables = () =>
  axios.get(`${BASE_URL}/all`).then(res => res.data);
