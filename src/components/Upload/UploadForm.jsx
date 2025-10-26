import React, { useState } from 'react';
import { materialService } from '../../services/materialService';
import { GROUPS, SUBJECTS, YEARS, SEMESTERS } from '../../constants';

const UploadForm = ({ onUploadSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    groupName: '',
    year: '',
    semester: '',
    file: null
  });
  const [fileType, setFileType] = useState('PDF');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          file: 'File size must be less than 10MB'
        }));
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          file: 'Only PDF and image files are allowed'
        }));
        return;
      }

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

      // Clear file error
      if (errors.file) {
        setErrors(prev => ({
          ...prev,
          file: ''
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.groupName) {
      newErrors.groupName = 'Group is required';
    }

    if (!formData.year) {
      newErrors.year = 'Year is required';
    }

    if (!formData.semester) {
      newErrors.semester = 'Semester is required';
    }

    if (!formData.file) {
      newErrors.file = 'Please select a file';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setUploading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('title', formData.title);
      uploadFormData.append('subject', formData.subject);
      uploadFormData.append('groupName', formData.groupName);
      uploadFormData.append('year', formData.year);
      uploadFormData.append('semester', formData.semester);
      uploadFormData.append('file', formData.file);

      await materialService.uploadMaterial(uploadFormData);
      
      // Reset form
      setFormData({
        title: '',
        subject: '',
        groupName: '',
        year: '',
        semester: '',
        file: null
      });
      setSelectedFile(null);
      setFileType('PDF');
      
      // Notify parent component
      if (onUploadSuccess) {
        onUploadSuccess();
      }
      
    } catch (error) {
      console.error('Upload error:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'Upload failed. Please try again.'
      }));
    } finally {
      setUploading(false);
    }
  };

  const getAvailableSubjects = () => {
    if (formData.groupName && SUBJECTS[formData.groupName]) {
      return SUBJECTS[formData.groupName];
    }
    return [...new Set(Object.values(SUBJECTS).flat())];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title Field */}
      <div>
        <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
          Title *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter material title"
          className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-light dark:text-text-dark bg-white dark:bg-gray-700 ${
            errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="e.g., Data Structures"
          className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-light dark:text-text-dark bg-white dark:bg-gray-700 ${
            errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
        )}
      </div>

      {/* Group Field */}
      <div>
        <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
          Group *
        </label>
        <select
          name="groupName"
          value={formData.groupName}
          onChange={handleInputChange}
          className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-light dark:text-text-dark bg-white dark:bg-gray-700 ${
            errors.groupName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        >
          <option value="">Select group</option>
          {GROUPS.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
        {errors.groupName && (
          <p className="mt-1 text-sm text-red-500">{errors.groupName}</p>
        )}
      </div>

      {/* Type Selector */}
      <div>
        <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
          File Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFileType('PDF')}
            className={`flex items-center justify-center gap-2 rounded-lg border-2 p-3 font-semibold transition-colors ${
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
            className={`flex items-center justify-center gap-2 rounded-lg border-2 p-3 font-semibold transition-colors ${
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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
            Year *
          </label>
          <select
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-light dark:text-text-dark bg-white dark:bg-gray-700 ${
              errors.year ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <option value="">Select Year</option>
            {YEARS.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          {errors.year && (
            <p className="mt-1 text-sm text-red-500">{errors.year}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
            Semester *
          </label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleInputChange}
            className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-light dark:text-text-dark bg-white dark:bg-gray-700 ${
              errors.semester ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <option value="">Select Sem</option>
            {SEMESTERS.map(sem => (
              <option key={sem} value={sem}>Semester {sem}</option>
            ))}
          </select>
          {errors.semester && (
            <p className="mt-1 text-sm text-red-500">{errors.semester}</p>
          )}
        </div>
      </div>

      {/* File Upload Section */}
      <div>
        <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
          File *
        </label>
        <div className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
          errors.file 
            ? 'border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20' 
            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50'
        }`}>
          <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 mb-3">
            <span className="material-symbols-outlined text-3xl text-primary">upload_file</span>
          </div>
          <p className="font-semibold text-text-light dark:text-text-dark mb-1">
            {selectedFile ? selectedFile.name : 'Attach your file here'}
          </p>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
            PDFs and JPGs only, up to 10MB
          </p>
          <label className="rounded-full bg-primary/20 dark:bg-primary/30 px-6 py-2.5 text-sm font-semibold text-primary dark:text-white cursor-pointer hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
            />
            Select File
          </label>
        </div>
        {errors.file && (
          <p className="mt-1 text-sm text-red-500">{errors.file}</p>
        )}
      </div>

      {/* Submit Error */}
      {errors.submit && (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
          <p className="text-sm text-red-800 dark:text-red-200">{errors.submit}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={uploading}
            className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-text-light dark:text-text-dark font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={uploading}
          className="flex-1 py-3 px-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {uploading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Uploading...
            </div>
          ) : (
            'Upload Material'
          )}
        </button>
      </div>
    </form>
  );
};

export default UploadForm;