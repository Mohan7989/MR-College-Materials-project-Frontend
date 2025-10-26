import axios from 'axios';

const BASE_URL = 'https://new-4rqi.onrender.com/api/notices';

export const getNotices = () =>
  axios.get(BASE_URL).then(res => res.data);
