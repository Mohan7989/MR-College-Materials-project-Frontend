import React from 'react';
import MaterialCard from './MaterialCard';

const MaterialGrid = ({ materials, onMaterialClick, loading = false }) => {
  if (loading) {
    return (
      <div className="grid gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 h-32"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!materials || materials.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-4">
          <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark">
            search_off
          </span>
        </div>
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
          No Materials Found
        </h3>
        <p className="text-text-muted-light dark:text-text-muted-dark">
          Try adjusting your search criteria or filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {materials.map((material) => (
        <MaterialCard
          key={material.id}
          material={material}
          onClick={() => onMaterialClick(material)}
        />
      ))}
    </div>
  );
};

export default MaterialGrid;