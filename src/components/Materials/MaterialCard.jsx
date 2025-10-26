import React from 'react';

const MaterialCard = ({ material, onClick }) => {
  const getFileIcon = (fileType) => {
    if (fileType.includes('pdf')) return 'picture_as_pdf';
    if (fileType.includes('image')) return 'image';
    return 'description';
  };

  const getUploadTime = () => {
    const times = ['2 days ago', '5 days ago', '1 week ago'];
    return times[Math.floor(Math.random() * times.length)];
  };

  const getUploader = () => {
    const uploaders = ['Alex Morgan', 'Sarah Chen', 'Admin'];
    return uploaders[Math.floor(Math.random() * uploaders.length)];
  };

  const getMaterialType = () => {
    if (material.title.toLowerCase().includes('question')) return 'Question Paper';
    if (material.title.toLowerCase().includes('notes')) return 'Notes';
    if (material.title.toLowerCase().includes('syllabus')) return 'Syllabus';
    if (material.title.toLowerCase().includes('lab')) return 'Lab Manual';
    return 'Material';
  };

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = material.filePath;
    link.download = material.title;
    link.click();
  };

  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm border border-border-light dark:border-border-dark">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <span className="material-symbols-outlined text-primary text-3xl">
            {getFileIcon(material.fileType)}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
            {material.title}
          </p>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
            Uploaded by {getUploader()} - {getUploadTime()}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
          Sem {material.semester}
        </span>
        <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
          {material.subject}
        </span>
        <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
          {getMaterialType()}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-3">
        <button 
          onClick={onClick}
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-medium leading-normal"
        >
          <span className="material-symbols-outlined text-base">visibility</span>
          <span className="truncate">Preview</span>
        </button>
        <button 
          onClick={handleDownload}
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-secondary text-white text-sm font-medium leading-normal"
        >
          <span className="material-symbols-outlined text-base">download</span>
          <span className="truncate">Download</span>
        </button>
      </div>
    </div>
  );
};

export default MaterialCard;