import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { materialsAPI } from '../services/api';

const MaterialDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMaterialDetails();
  }, [id]);

  const fetchMaterialDetails = async () => {
    try {
      // Since we don't have a specific endpoint, we'll get all and filter
      const response = await materialsAPI.getApproved();
      const foundMaterial = response.data.find(m => m.id === parseInt(id));
      setMaterial(foundMaterial);
    } catch (error) {
      console.error('Error fetching material details:', error);
      // Fallback data
      setMaterial({
        id: 1,
        title: 'Data Structures & Algorithms Notes',
        subject: 'Data Structures',
        groupName: 'Computer Science',
        year: '2023',
        semester: '4',
        fileType: 'application/pdf',
        filePath: '/uploads/dsa_notes.pdf',
        approved: true
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (material && material.filePath) {
      const link = document.createElement('a');
      link.href = material.filePath;
      link.download = material.title;
      link.click();
    }
  };

  const getFileSize = () => {
    return '2.5 MB'; // This would come from backend in real scenario
  };

  const getFileTypeText = () => {
    if (material.fileType.includes('pdf')) return 'PDF';
    if (material.fileType.includes('image')) return 'Image';
    return 'Document';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark p-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">Loading material details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!material) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark p-4">
        <div className="text-center py-8">
          <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark mb-2">
            error
          </span>
          <p className="text-text-muted-light dark:text-text-muted-dark">Material not found</p>
          <button 
            onClick={() => navigate('/materials')}
            className="mt-4 text-primary dark:text-accent"
          >
            Back to Materials
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center border-b border-gray-200 dark:border-gray-700 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-light dark:text-text-dark"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-text-light dark:text-text-dark flex-1 text-center">
          Material Details
        </h1>
        <button className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-light dark:text-text-dark">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </header>

      <main className="flex-grow px-4 pt-6 pb-24">
        {/* Document Previewer */}
        <section className="mb-6">
          <div 
            className="w-full bg-center bg-no-repeat bg-cover aspect-[4/5] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
            style={{ 
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_LaBEpNAQygDkAIptfjsDEADt9bhRJ7VL2ns5trOdNbKuT86GV4RTj0AgXeeicNERXjctboP2RcAFmkfpelTbvEDlTMVkAJ01breONZwTdUMz4FITPtmZm0VBaquRXlceKLYSBRHYKO85vW_KvE-eHb8ykZsn0ICWOTcmlDoeYq1mz7iBjy1d2LWeImSwxe0oglSlGsvjAGMStPs4sAKt00vHfN7J-UZ-dVR0hsja8opKoTcNxxDOEowR08BKTEEqu294US3qdGI")` 
            }}
          />
          <div className="mt-3 flex items-center justify-center gap-4 text-text-muted-light dark:text-text-muted-dark">
            <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined text-base">zoom_in</span>
            </button>
            <span className="text-sm font-medium text-text-light dark:text-text-dark">Page 1 of 12</span>
            <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined text-base">zoom_out</span>
            </button>
          </div>
        </section>

        {/* Information Section */}
        <section>
          {/* Headline Text */}
          <h1 className="text-text-light dark:text-text-dark tracking-tight text-2xl font-bold leading-tight text-left mb-1">
            {material.title}
          </h1>
          
          {/* Meta Text */}
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal mb-4">
            Uploaded by Alex Morgan
          </p>
          
          {/* Chips */}
          <div className="flex gap-2 pb-5 flex-wrap">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
              <p className="text-primary text-sm font-medium leading-normal">Mid-Term</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
              <p className="text-primary text-sm font-medium leading-normal">Notes</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
              <p className="text-primary text-sm font-medium leading-normal">PYQ</p>
            </div>
          </div>
          
          {/* Additional Metadata */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-1">Subject</p>
              <p className="font-semibold text-text-light dark:text-text-dark">{material.subject}</p>
            </div>
            <div>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-1">Group</p>
              <p className="font-semibold text-text-light dark:text-text-dark">{material.groupName}</p>
            </div>
            <div>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-1">Year</p>
              <p className="font-semibold text-text-light dark:text-text-dark">{material.year}</p>
            </div>
            <div>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-1">Semester</p>
              <p className="font-semibold text-text-light dark:text-text-dark">Semester {material.semester}</p>
            </div>
            <div>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-1">File Info</p>
              <p className="font-semibold text-text-light dark:text-text-dark">
                {getFileTypeText()}, {getFileSize()}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Action Buttons Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 p-4">
          <button className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <span className="material-symbols-outlined">bookmark_border</span>
          </button>
          <button 
            onClick={handleDownload}
            className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary text-white text-base font-bold leading-normal tracking-wide"
          >
            <span className="material-symbols-outlined">download</span>
            <span>Download File</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default MaterialDetails;