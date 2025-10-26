import { materialsAPI } from './api';

export const materialService = {
  // Get all approved materials
  getApprovedMaterials: async () => {
    try {
      const response = await materialsAPI.getApproved();
      return response.data;
    } catch (error) {
      console.error('Error fetching approved materials:', error);
      throw error;
    }
  },

  // Get pending materials for admin
  getPendingMaterials: async () => {
    try {
      const response = await materialsAPI.getPending();
      return response.data;
    } catch (error) {
      console.error('Error fetching pending materials:', error);
      throw error;
    }
  },

  // Upload new material
  uploadMaterial: async (formData) => {
    try {
      const response = await materialsAPI.upload(formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading material:', error);
      throw error;
    }
  },

  // Approve material (admin only)
  approveMaterial: async (materialId) => {
    try {
      const response = await materialsAPI.approve(materialId);
      return response.data;
    } catch (error) {
      console.error('Error approving material:', error);
      throw error;
    }
  },

  // Delete material
  deleteMaterial: async (materialId) => {
    try {
      await materialsAPI.delete(materialId);
      return true;
    } catch (error) {
      console.error('Error deleting material:', error);
      throw error;
    }
  },

  // Filter materials
  filterMaterials: (materials, filters) => {
    let filtered = [...materials];

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
        const title = material.title.toLowerCase();
        if (filters.type === 'Question Paper') return title.includes('question') || title.includes('paper');
        if (filters.type === 'Notes') return title.includes('notes') || title.includes('note');
        if (filters.type === 'Syllabus') return title.includes('syllabus');
        if (filters.type === 'Lab Manual') return title.includes('lab') || title.includes('manual');
        return true;
      });
    }

    return filtered;
  },

  // Search materials
  searchMaterials: (materials, searchTerm) => {
    if (!searchTerm) return materials;
    
    return materials.filter(material =>
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.groupName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
};