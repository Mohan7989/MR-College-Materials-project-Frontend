import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { materialsAPI, adminAPI } from '../services/api';
import { ADMIN_PASSWORD } from '../constants';

const Admin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [pendingMaterials, setPendingMaterials] = useState([]);
  const [approvedMaterials, setApprovedMaterials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      fetchMaterials();
    }
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await adminAPI.login(password);
      if (response.data === 'ACCESS_GRANTED') {
        setIsLoggedIn(true);
      } else {
        setError('Invalid password');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchMaterials = async () => {
    try {
      const [pendingRes, approvedRes] = await Promise.all([
        materialsAPI.getPending(),
        materialsAPI.getApproved()
      ]);
      setPendingMaterials(pendingRes.data);
      setApprovedMaterials(approvedRes.data);
    } catch (error) {
      console.error('Error fetching materials:', error);
      // Fallback data
      setPendingMaterials([
        {
          id: 1,
          title: 'New Physics Notes',
          subject: 'Physics',
          groupName: 'B.Sc',
          year: '2024',
          semester: '2',
          fileType: 'application/pdf',
          approved: false
        }
      ]);
      setApprovedMaterials([
        {
          id: 2,
          title: 'Chemistry Lab Manual',
          subject: 'Chemistry',
          groupName: 'B.Sc',
          year: '2023',
          semester: '3',
          fileType: 'application/pdf',
          approved: true
        }
      ]);
    }
  };

  const handleApprove = async (materialId) => {
    try {
      await materialsAPI.approve(materialId);
      // Refresh the list
      fetchMaterials();
    } catch (error) {
      console.error('Error approving material:', error);
      alert('Failed to approve material');
    }
  };

  const handleDelete = async (materialId) => {
    if (window.confirm('Are you sure you want to delete this material?')) {
      try {
        await materialsAPI.delete(materialId);
        // Refresh the list
        fetchMaterials();
      } catch (error) {
        console.error('Error deleting material:', error);
        alert('Failed to delete material');
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark p-4">
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-border-light dark:border-border-dark">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-12 shrink-0 items-center text-text-light dark:text-text-dark"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Admin Login
          </h1>
          <div className="w-12"></div>
        </div>

        <div className="max-w-md mx-auto mt-8 p-6">
          <div className="text-center mb-8">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">admin_panel_settings</span>
            </div>
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
              Admin Access
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Enter admin password to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
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
          Admin Panel
        </h1>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="text-text-muted-light dark:text-text-muted-dark text-sm"
        >
          Logout
        </button>
      </div>

      <div className="p-4">
        {/* Pending Approvals Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-4">
            Pending Approvals ({pendingMaterials.length})
          </h2>

          {pendingMaterials.length === 0 ? (
            <div className="text-center py-8 bg-card-light dark:bg-card-dark rounded-lg">
              <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark mb-2">
                check_circle
              </span>
              <p className="text-text-muted-light dark:text-text-muted-dark">No pending approvals</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingMaterials.map((material) => (
                <div key={material.id} className="bg-card-light dark:bg-card-dark rounded-lg p-4 shadow-sm border border-border-light dark:border-border-dark">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-light dark:text-text-dark">
                        {material.title}
                      </h3>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">
                        {material.subject} • {material.groupName} • Sem {material.semester} • {material.year}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleApprove(material.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded text-sm font-medium"
                      >
                        <span className="material-symbols-outlined text-sm">check</span>
                        Approve
                      </button>
                      <button
                        onClick={() => handleDelete(material.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded text-sm font-medium"
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Approved Materials Section */}
        <section>
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-4">
            Approved Materials ({approvedMaterials.length})
          </h2>

          {approvedMaterials.length === 0 ? (
            <div className="text-center py-8 bg-card-light dark:bg-card-dark rounded-lg">
              <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark mb-2">
                description
              </span>
              <p className="text-text-muted-light dark:text-text-muted-dark">No approved materials</p>
            </div>
          ) : (
            <div className="space-y-4">
              {approvedMaterials.map((material) => (
                <div key={material.id} className="bg-card-light dark:bg-card-dark rounded-lg p-4 shadow-sm border border-border-light dark:border-border-dark">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-light dark:text-text-dark">
                        {material.title}
                      </h3>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">
                        {material.subject} • {material.groupName} • Sem {material.semester} • {material.year}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleDelete(material.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded text-sm font-medium"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Admin;