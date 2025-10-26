import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mt-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to MRCA Students Hub
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your one-stop platform for study materials, question papers, and academic resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl mb-2">
                school
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-white">Study Materials</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Access semester-wise notes and question papers
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-3xl mb-2">
                upload_file
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-white">Upload Resources</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Share your study materials with fellow students
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-3xl mb-2">
                schedule
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-white">Exam Schedule</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Stay updated with timetable and notifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;