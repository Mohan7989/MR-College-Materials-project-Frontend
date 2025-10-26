import React, { useState, useEffect } from 'react';
import { materialService } from '../../services/materialService';

const AdminPanel = () => {
  const [pendingMaterials, setPendingMaterials] = useState([]);
  const [approvedMaterials, setApprovedMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      setLoading(true);
      const [pending, approved] = await Promise.all([
        materialService.getPendingMaterials(),
        materialService.getApprovedMaterials()
      ]);
      setPendingMaterials(pending);
      setApprovedMaterials(approved);
    } catch (error) {
      console.error('Error fetching materials:', error);
      // Fallback data for demo
      setPendingMaterials([
        {
          id: 1,
          title: 'New Physics Notes - Quantum Mechanics',
          subject: 'Physics',
          groupName: 'B.Sc',
          year: '2024',
          semester: '3',
          fileType: 'application/pdf',
          approved: false,
          uploadDate: '2024-01-15'
        }
      ]);
      setApprovedMaterials([
        {
          id: 2,
          title: 'Chemistry Lab Manual - Organic Chemistry',
          subject: 'Chemistry',
          groupName: 'B.Sc',
          year: '2023',
          semester: '2',
          fileType: 'application/pdf',
          approved: true,
          uploadDate: '2024-01-10'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (materialId) => {
    try {
      await materialService.approveMaterial(materialId);
      // Move material from pending to approved
      const material = pendingMaterials.find(m => m.id === materialId);
      if (material) {
        setPendingMaterials(prev => prev.filter(m => m.id !== materialId));
        setApprovedMaterials(prev => [...prev, { ...material, approved: true }]);
      }
    } catch (error) {
      alert('Failed to approve material. Please try again.');
    }
  };

  const handleDelete = async (materialId, isPending = false) => {
    if (window.confirm('Are you sure you want to delete this material?')) {
      try {
        await materialService.deleteMaterial(materialId);
        if (isPending) {
          setPendingMaterials(prev => prev.filter(m => m.id !== materialId));
        } else {
          setApprovedMaterials(prev => prev.filter(m => m.id !== materialId));
        }
      } catch (error) {
        alert('Failed to delete material. Please try again.');
      }
    }
  };

  const getFileIcon = (fileType) => {
    if (fileType.includes('pdf')) return 'picture_as_pdf';
    if (fileType.includes('image')) return 'image';
    return 'description';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('pending')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pending'
                ? 'border-primary text-primary'
                : 'border-transparent text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'
            }`}
          >
            Pending Approval
            {pendingMaterials.length > 0 && (
              <span className="ml-2 py-0.5 px-2 text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                {pendingMaterials.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'approved'
                ? 'border-primary text-primary'
                : 'border-transparent text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'
            }`}
          >
            Approved Materials
            <span className="ml-2 py-0.5 px-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
              {approvedMaterials.length}
            </span>
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'pending' && (
        <div>
          <h2 className="text-lg font-semibold text-text-light dark:text-text-dark mb-4">
            Materials Waiting for Approval
          </h2>
          
          {pendingMaterials.length === 0 ? (
            <div className="text-center py-12 bg-card-light dark:bg-card-dark rounded-lg">
              <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark mb-3">
                check_circle
              </span>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                No pending materials for approval
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingMaterials.map((material) => (
                <div key={material.id} className="bg-card-light dark:bg-card-dark rounded-lg p-4 shadow-sm border border-border-light dark:border-border-dark">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <span className="material-symbols-outlined text-primary">
                          {getFileIcon(material.fileType)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-text-light dark:text-text-dark">
                          {material.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {material.subject}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            {material.groupName}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                            Sem {material.semester}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                            {material.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => handleApprove(material.id)}
                        className="flex items-center space-x-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">check</span>
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => handleDelete(material.id, true)}
                        className="flex items-center space-x-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'approved' && (
        <div>
          <h2 className="text-lg font-semibold text-text-light dark:text-text-dark mb-4">
            Approved Materials
          </h2>
          
          {approvedMaterials.length === 0 ? (
            <div className="text-center py-12 bg-card-light dark:bg-card-dark rounded-lg">
              <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark mb-3">
                description
              </span>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                No approved materials yet
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {approvedMaterials.map((material) => (
                <div key={material.id} className="bg-card-light dark:bg-card-dark rounded-lg p-4 shadow-sm border border-border-light dark:border-border-dark">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400">
                          {getFileIcon(material.fileType)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-text-light dark:text-text-dark">
                          {material.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {material.subject}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            {material.groupName}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                            Sem {material.semester}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                            {material.year}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Approved
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => handleDelete(material.id, false)}
                        className="flex items-center space-x-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;