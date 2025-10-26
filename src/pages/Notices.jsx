import React, { useEffect, useState } from 'react';
import NoticeBoard from '../components/NoticeBoard';
import axios from 'axios';

function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('https://new-4rqi.onrender.com/api/notices');
        setNotices(response.data);
      } catch (err) {
        setNotices([]);
      }
    };
    fetchNotices();
  }, []);

  return (
    <div>
      <h2 className="text-primary mb-3">Latest Notices</h2>
      <NoticeBoard notices={notices} />
    </div>
  );
}

export default Notices;
