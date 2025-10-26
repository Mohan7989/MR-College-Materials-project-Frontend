import React, { useState, useEffect } from 'react';
import FilterSection from '../components/FilterSection';
import Materials from '../components/Materials';
import axios from 'axios';

function Semester() {
  const [materials, setMaterials] = useState([]);
  const [filters, setFilters] = useState({ year: '', semester: '', groupName: '', subject: '' });

  useEffect(() => {
    fetchMaterials();
  }, [filters]);

  const fetchMaterials = async () => {
    try {
      const response = await axios.get('https://new-4rqi.onrender.com/api/materials/approved');
      let filtered = response.data;
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
          filtered = filtered.filter(mat => mat[key] === filters[key]);
        }
      });
      setMaterials(filtered);
    } catch (err) {
      setMaterials([]);
    }
  };

  return (
    <div>
      <h2 className='mb-3 text-primary'>Semester Question Papers</h2>
      <FilterSection filters={filters} setFilters={setFilters} />
      <Materials materials={materials} />
    </div>
  );
}

export default Semester;
