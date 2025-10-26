import React, { useEffect, useState } from 'react';
import Timetable from '../components/Timetable';
import axios from 'axios';

function TimetablePage() {
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        const response = await axios.get('https://new-4rqi.onrender.com/api/timetables/active');
        setTimetables(response.data);
      } catch (err) {
        setTimetables([]);
      }
    };
    fetchTimetables();
  }, []);

  return (
    <div>
      <h2 className="text-info mb-3">Exam Timetable</h2>
      <Timetable data={timetables} />
    </div>
  );
}

export default TimetablePage;
