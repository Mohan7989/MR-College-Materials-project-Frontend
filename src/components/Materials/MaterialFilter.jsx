import React, { useState } from 'react';
import { GROUPS, SUBJECTS, YEARS, SEMESTERS, MATERIAL_TYPES } from '../../constants';

const MaterialFilter = ({ filters, onFilterChange, onReset }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleFilterChange = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const getAvailableSubjects = () => {
    if (filters.group && SUBJECTS[filters.group]) {
      return SUBJECTS[filters.group];
    }
    return [...new Set(Object.values(SUBJECTS).flat())];
  };

  return (
    <div className="flex flex-col p-4 pt-2 gap-3">
      <details className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-gray-800 px-4 group" open={isOpen}>
        <summary 
          className="flex cursor-pointer items-center justify-between gap-6 py-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
            Filter Materials
          </p>
          <div className={`text-text-light dark:text-text-dark transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </summary>
        
        <div className="pb-4 pt-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <select 
              value={filters.semester}
              onChange={(e) => handleFilterChange('semester', e.target.value)}
              className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary text-sm"
            >
              <option value="">All Semesters</option>
              {SEMESTERS.map(sem => (
                <option key={sem} value={sem}>Semester {sem}</option>
              ))}
            </select>

            <select 
              value={filters.group}
              onChange={(e) => handleFilterChange('group', e.target.value)}
              className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary text-sm"
            >
              <option value="">All Groups</option>
              {GROUPS.map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </div>

          <select 
            value={filters.subject}
            onChange={(e) => handleFilterChange('subject', e.target.value)}
            className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary text-sm"
          >
            <option value="">All Subjects</option>
            {getAvailableSubjects().map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-4">
            <select 
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
              className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary text-sm"
            >
              <option value="">All Years</option>
              {YEARS.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <select 
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary text-sm"
            >
              <option value="">All Types</option>
              {MATERIAL_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button 
              onClick={onReset}
              className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary"
            >
              Reset
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </details>
    </div>
  );
};

export default MaterialFilter;