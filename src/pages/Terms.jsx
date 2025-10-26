import React from 'react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 px-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-light dark:text-text-dark"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Terms & Conditions
        </h2>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto px-4 pt-6 pb-24">
        <h1 className="text-text-light dark:text-text-dark tracking-light text-[32px] font-bold leading-tight text-left pb-3">
          Introduction
        </h1>
        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed pb-6">
          Welcome to MRCA STUDENTS HUB. By accessing or using our mobile application, you agree to be bound by these terms and conditions. Please read them carefully. If you do not agree with any part of these terms, you must not use our services.
        </p>

        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-3 pt-5">
          User Accounts & Responsibilities
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed pb-3">
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account. You must ensure that the information you provide is accurate, complete, and current at all times.
        </p>

        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-3 pt-5">
          Content Usage
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed pb-3">
          The materials provided on the MRCA STUDENTS HUB, including question papers, schedules, and notes, are for personal, non-commercial use only. You may not distribute, modify, transmit, reuse, or use the content for public or commercial purposes without our written permission.
        </p>

        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-3 pt-5">
          User-Generated Content
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed pb-3">
          Users may upload their own study materials. By uploading content, you grant MRCA STUDENTS HUB a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute such content. You are solely responsible for the content you upload and must ensure it does not infringe on any third-party rights. We reserve the right to remove any content that violates our policies.
        </p>

        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-3 pt-5">
          Limitation of Liability
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed pb-3">
          The information on our app is provided on an "as is" basis. While we strive for accuracy, we make no warranties regarding the completeness, reliability, or accuracy of the materials. We are not liable for any damages arising from the use of this application.
        </p>

        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-3 pt-5">
          Changes to Terms
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed pb-6">
          We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the app after such changes constitutes your acceptance of the new terms.
        </p>
      </main>
    </div>
  );
};

export default Terms;