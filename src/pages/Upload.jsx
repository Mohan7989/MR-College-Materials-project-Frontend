import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { materialsAPI } from '../services/api';
import { GROUPS, SUBJECTS, YEARS, SEMESTERS } from '../constants';

const Upload = () => {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState('PDF');
  
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    groupName: '',
    year: '',
    semester: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFormData(prev => ({
        ...prev,
        file: file
      }));
      
      // Auto-detect file type
      if (file.type.includes('pdf')) {
        setFileType('PDF');
      } else if (file.type.includes('image')) {
        setFileType('Image');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.subject || !formData.groupName || !formData.year || !formData.semester || !formData.file) {
      alert('Please fill all fields and select a file');
      return;
    }

    setIsUploading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('title', formData.title);
      uploadFormData.append('subject', formData.subject);
      uploadFormData.append('groupName', formData.groupName);
      uploadFormData.append('year', formData.year);
      uploadFormData.append('semester', formData.semester);
      uploadFormData.append('file', formData.file);

      await materialsAPI.upload(uploadFormData);
      
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/materials');
      }, 3000);
      
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const getAvailableSubjects = () => {
    if (formData.groupName && SUBJECTS[formData.groupName]) {
      return SUBJECTS[formData.groupName];
    }
    return [...new Set(Object.values(SUBJECTS).flat())];
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-3 justify-between shadow-sm">
        <button 
          onClick={() => navigate(-1)}
          className="text-text-light dark:text-text-dark flex size-10 shrink-0 items-center justify-center"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Upload New Material
        </h2>
        <div className="size-10"></div>
      </div>

      {/* Upload Form */}
      <main className="flex-1 px-4 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Title Field */}
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
              Title
            </p>
            <input 
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter material title"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
              required
            />
          </label>

          {/* Subject Field */}
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
              Subject
            </p>
            <input 
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="e.g., Data Structures"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
              required
            />
          </label>

          {/* Group Field */}
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
              Group
            </p>
            <select 
              name="groupName"
              value={formData.groupName}
              onChange={handleInputChange}
              className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-14 p-[15px] text-base font-normal leading-normal"
              required
            >
              <option value="">Select group</option>
              {GROUPS.map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </label>

          {/* Type Selector */}
          <div>
            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
              Type
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                onClick={() => setFileType('PDF')}
                className={`flex items-center justify-center gap-2 rounded-lg border-2 p-3.5 font-semibold transition-colors ${
                  fileType === 'PDF' 
                    ? 'border-primary bg-primary/20 text-primary dark:bg-primary/30 dark:text-white' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark'
                }`}
              >
                <span className="material-symbols-outlined">description</span>
                <span>PDF</span>
              </button>
              <button 
                type="button"
                onClick={() => setFileType('Image')}
                className={`flex items-center justify-center gap-2 rounded-lg border-2 p-3.5 font-semibold transition-colors ${
                  fileType === 'Image' 
                    ? 'border-primary bg-primary/20 text-primary dark:bg-primary/30 dark:text-white' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark'
                }`}
              >
                <span className="material-symbols-outlined">image</span>
                <span>Image</span>
              </button>
            </div>
          </div>

          {/* Year and Semester Row */}
          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col flex-1">
              <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                Year
              </p>
              <select 
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-14 p-[15px] text-base font-normal leading-normal"
                required
              >
                <option value="">Select Year</option>
                {YEARS.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col flex-1">
              <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                Semester
              </p>
              <select 
                name="semester"
                value={formData.semester}
                onChange={handleInputChange}
                className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-14 p-[15px] text-base font-normal leading-normal"
                required
              >
                <option value="">Select Sem</option>
                {SEMESTERS.map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </label>
          </div>

          {/* File Upload Section */}
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 p-6 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 mb-3">
              <span className="material-symbols-outlined text-3xl text-primary">upload_file</span>
            </div>
            <p className="font-semibold text-text-light dark:text-text-dark mb-1">
              {selectedFile ? selectedFile.name : 'Attach your file here'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">PDFs and JPGs only, up to 10MB</p>
            <label className="mt-4 rounded-full bg-primary/20 dark:bg-primary/30 px-6 py-2.5 text-sm font-semibold text-primary dark:text-white cursor-pointer">
              <input 
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
              />
              Select File
            </label>
          </div>

          {/* Upload Button */}
          <div className="sticky bottom-0 bg-background-light dark:bg-background-dark p-4 pt-2">
            <button 
              type="submit"
              disabled={isUploading}
              className="flex w-full items-center justify-center rounded-xl bg-primary h-14 text-base font-bold text-white shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Uploading...' : 'Upload File'}
            </button>
          </div>
        </form>
      </main>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="flex max-w-sm flex-col items-center rounded-xl bg-white dark:bg-gray-800 p-8 text-center shadow-2xl">
            <div className="flex size-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <span className="material-symbols-outlined text-4xl text-green-600">check_circle</span>
            </div>
            <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">
              Upload Completed!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your materials will be live on the website within 2 hours.
            </p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-white"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;