import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MaterialFilter from '../components/Materials/MaterialFilter';
import MaterialCard from '../components/Materials/MaterialCard';
import { materialsAPI } from '../services/api';

const Materials = () => {
  const [materials, setMaterials] = useState([]);
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    semester: '',
    group: '',
    subject: '',
    year: '',
    type: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchMaterials();
  }, []);

  useEffect(() => {
    filterMaterials();
  }, [materials, filters, searchTerm]);

  const fetchMaterials = async () => {
    try {
      const response = await materialsAPI.getApproved();
      setMaterials(response.data);
    } catch (error) {
      console.error('Error fetching materials:', error);
      // Fallback data
      setMaterials([
        {
          id: 1,
          title: 'DSA - End Semester Question Paper',
          subject: 'Data Structures',
          groupName: 'B.Sc',
          year: '2023',
          semester: '3',
          fileType: 'application/pdf',
          filePath: '/uploads/dsa.pdf',
          approved: true
        },
        {
          id: 2,
          title: 'Maths III - Complete Notes Unit 1',
          subject: 'Mathematics III',
          groupName: 'B.Sc',
          year: '2023',
          semester: '3',
          fileType: 'application/pdf',
          filePath: '/uploads/maths.pdf',
          approved: true
        },
        {
          id: 3,
          title: 'Digital Electronics - Circuit Diagram',
          subject: 'Digital Electronics',
          groupName: 'B.Sc',
          year: '2023',
          semester: '3',
          fileType: 'image/jpeg',
          filePath: '/uploads/circuit.jpg',
          approved: true
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filterMaterials = () => {
    let filtered = materials;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(material =>
        material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply other filters
    if (filters.semester) {
      filtered = filtered.filter(material => material.semester === filters.semester);
    }
    if (filters.group) {
      filtered = filtered.filter(material => material.groupName === filters.group);
    }
    if (filters.subject) {
      filtered = filtered.filter(material => material.subject === filters.subject);
    }
    if (filters.year) {
      filtered = filtered.filter(material => material.year === filters.year);
    }
    if (filters.type && filters.type !== 'All') {
      filtered = filtered.filter(material => {
        if (filters.type === 'Question Paper') return material.title.toLowerCase().includes('question');
        if (filters.type === 'Notes') return material.title.toLowerCase().includes('notes');
        if (filters.type === 'Syllabus') return material.title.toLowerCase().includes('syllabus');
        if (filters.type === 'Lab Manual') return material.title.toLowerCase().includes('lab');
        return true;
      });
    }

    setFilteredMaterials(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      semester: '',
      group: '',
      subject: '',
      year: '',
      type: ''
    });
    setSearchTerm('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark p-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">Loading materials...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-border-light dark:border-border-dark">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-12 shrink-0 items-center text-text-light dark:text-text-dark"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Study Materials
        </h1>
        <div className="flex w-12 items-center justify-end">
          <Link 
            to="/upload"
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-secondary gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <span className="material-symbols-outlined text-3xl">upload_file</span>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pt-4 pb-2 bg-background-light dark:bg-background-dark">
        <div className="flex flex-col min-w-40 h-14 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-text-muted-light dark:text-text-muted-dark flex border border-r-0 border-border-light dark:border-border-dark bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              type="text"
              placeholder="Search by keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border border-l-0 border-border-light dark:border-border-dark bg-white dark:bg-gray-800 h-full placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 rounded-l-none pl-2 text-base font-normal leading-normal"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <MaterialFilter 
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
      />

      {/* Materials List */}
      <div className="px-4 pb-6">
        <h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em] pb-3 pt-2">
          {filteredMaterials.length > 0 ? 'Recent Uploads' : 'No Materials Found'}
        </h2>

        {filteredMaterials.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border-light dark:border-border-dark bg-white dark:bg-gray-800 p-8 text-center mt-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">search_off</span>
            </div>
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
              No Materials Found
            </h3>
            <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">
              Try adjusting your filters or be the first to upload a resource for this category!
            </p>
            <Link 
              to="/upload"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-bold text-white"
            >
              <span className="material-symbols-outlined text-base">upload_file</span>
              Upload Material
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredMaterials.map((material) => (
              <MaterialCard 
                key={material.id}
                material={material}
                onClick={() => navigate(`/materials/${material.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Materials;