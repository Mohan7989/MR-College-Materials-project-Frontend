import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Materials', path: '/materials', icon: 'library_books' },
    { name: 'Upload', path: '/upload', icon: 'upload_file' },
    { name: 'Semesters', path: '/semesters', icon: 'school' },
    { name: 'About', path: '/about', icon: 'info' },
    { name: 'Terms & Conditions', path: '/terms', icon: 'description' },
    { name: 'Privacy Policy', path: '/privacy', icon: 'privacy_tip' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-gray-800 p-4 justify-between shadow-sm border-b border-gray-200 dark:border-gray-700">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        
        <div className="flex flex-col items-center">
          <h1 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
            MRCA STUDENTS HUB
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-normal">
            ONLY FOR STUDENTS
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/materials')}
          className="flex items-center justify-center w-10 h-10 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined text-gray-700 dark:text-gray-200">close</span>
              </button>
            </div>
            
            <nav className="p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
              
              {/* Admin Link */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/admin');
                }}
                className="flex items-center gap-3 p-3 rounded-lg mb-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              >
                <span className="material-symbols-outlined">admin_panel_settings</span>
                Admin Panel
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;