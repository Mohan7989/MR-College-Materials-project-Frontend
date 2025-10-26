import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { materialsAPI } from '../services/api';

const Semesters = () => {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSemester, setSelectedSemester] = useState('');

  useEffect(() => {
    fetchMaterials();
  }, []);

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
          title: 'Semester 1 - Mathematics Question Papers',
          subject: 'Mathematics',
          groupName: 'B.Sc',
          year: '2023',
          semester: '1',
          fileType: 'application/pdf',
          approved: true
        },
        {
          id: 2,
          title: 'Semester 2 - Physics Lab Manual',
          subject: 'Physics',
          groupName: 'B.Sc',
          year: '2023',
          semester: '2',
          fileType: 'application/pdf',
          approved: true
        },
        {
          id: 3,
          title: 'Semester 3 - Data Structures Notes',
          subject: 'Data Structures',
          groupName: 'B.Sc',
          year: '2023',
          semester: '3',
          fileType: 'application/pdf',
          approved: true
        },
        {
          id: 4,
          title: 'Semester 4 - Chemistry Previous Papers',
          subject: 'Chemistry',
          groupName: 'B.Sc',
          year: '2023',
          semester: '4',
          fileType: 'application/pdf',
          approved: true
        },
        {
          id: 5,
          title: 'Semester 5 - Computer Networks',
          subject: 'Computer Networks',
          groupName: 'B.Sc',
          year: '2023',
          semester: '5',
          fileType: 'application/pdf',
          approved: true
        },
        {
          id: 6,
          title: 'Semester 6 - Project Guidelines',
          subject: 'Project Work',
          groupName: 'B.Sc',
          year: '2023',
          semester: '6',
          fileType: 'application/pdf',
          approved: true
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const semesters = ['1', '2', '3', '4', '5', '6'];
  
  const getMaterialsBySemester = (semester) => {
    return materials.filter(material => material.semester === semester);
  };

  const getSemesterMaterials = () => {
    if (selectedSemester) {
      return getMaterialsBySemester(selectedSemester);
    }
    // Group by semester
    const grouped = {};
    semesters.forEach(sem => {
      grouped[sem] = getMaterialsBySemester(sem);
    });
    return grouped;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark p-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">Loading semesters...</p>
          </div>
        </div>
      </div>
    );
  }

  const semesterMaterials = getSemesterMaterials();

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
          Semesters
        </h1>
        <div className="w-12"></div>
      </div>

      {/* Semester Filter */}
      <div className="p-4">
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedSemester('')}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedSemester === ''
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark'
            }`}
          >
            All Semesters
          </button>
          {semesters.map(sem => (
            <button
              key={sem}
              onClick={() => setSelectedSemester(sem)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedSemester === sem
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark'
              }`}
            >
              Semester {sem}
            </button>
          ))}
        </div>
      </div>

      {/* Materials by Semester */}
      <div className="p-4">
        {selectedSemester ? (
          // Single semester view
          <div>
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-4">
              Semester {selectedSemester} Materials
            </h2>
            {semesterMaterials.length === 0 ? (
              <div className="text-center py-8 bg-card-light dark:bg-card-dark rounded-lg">
                <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark mb-2">
                  folder_off
                </span>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  No materials available for Semester {selectedSemester}
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {semesterMaterials.map(material => (
                  <div 
                    key={material.id}
                    onClick={() => navigate(`/materials/${material.id}`)}
                    className="bg-card-light dark:bg-card-dark rounded-lg p-4 shadow-sm border border-border-light dark:border-border-dark cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <span className="material-symbols-outlined text-primary">
                          {material.fileType.includes('pdf') ? 'picture_as_pdf' : 'description'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-text-light dark:text-text-dark text-sm">
                          {material.title}
                        </h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-xs mt-1">
                          {material.subject} • {material.groupName}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          // All semesters view
          <div className="space-y-6">
            {semesters.map(sem => {
              const semMaterials = semesterMaterials[sem];
              if (semMaterials.length === 0) return null;

              return (
                <div key={sem}>
                  <h2 className="text-lg font-bold text-text-light dark:text-text-dark mb-3">
                    Semester {sem}
                  </h2>
                  <div className="grid gap-3">
                    {semMaterials.slice(0, 3).map(material => (
                      <div 
                        key={material.id}
                        onClick={() => navigate(`/materials/${material.id}`)}
                        className="bg-card-light dark:bg-card-dark rounded-lg p-3 shadow-sm border border-border-light dark:border-border-dark cursor-pointer hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                            <span className="material-symbols-outlined text-primary text-sm">
                              {material.fileType.includes('pdf') ? 'picture_as_pdf' : 'description'}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-text-light dark:text-text-dark text-sm">
                              {material.title}
                            </h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark text-xs mt-1">
                              {material.subject}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {semMaterials.length > 3 && (
                      <button
                        onClick={() => setSelectedSemester(sem)}
                        className="text-primary dark:text-accent text-sm font-medium text-center py-2"
                      >
                        View all {semMaterials.length} materials
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Semesters;