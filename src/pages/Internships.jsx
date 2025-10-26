import React, { useEffect, useState } from 'react';
import InternshipList from '../components/InternshipList';
import axios from 'axios';

function Internships() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('https://new-4rqi.onrender.com/api/internships');
        setInternships(response.data);
      } catch (err) {
        setInternships([]);
      }
    };
    fetchInternships();
  }, []);

  return (
    <div>
      <h2 className="text-warning mb-3">Internships & Opportunities</h2>
      <InternshipList internships={internships} />
    </div>
  );
}

export default Internships;
