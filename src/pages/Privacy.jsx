import React from 'react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
        <div className="flex items-center p-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-light dark:text-text-dark"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
            Privacy & Policy
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 pb-10">
        {/* Last Updated */}
        <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal pb-3 pt-4 px-4">
          Last Updated: October 26, 2023
        </p>

        {/* Introduction */}
        <section className="px-4">
          <h2 className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight pb-2 pt-5">
            Introduction
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1">
            Welcome to MRCA STUDENTS HUB. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="px-4">
          <h2 className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight pb-2 pt-5">
            Information We Collect
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1">
            We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-text-light dark:text-text-dark text-base font-normal leading-relaxed">
            <li>
              <span className="font-semibold">Personal Information:</span> Personally identifiable information, such as your name, email address, and student ID, that you voluntarily give to us when you register with the Application.
            </li>
            <li>
              <span className="font-semibold">User-Generated Content:</span> We may collect information that you submit when you upload study materials, post comments, or provide other content to the Application.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> Information our servers automatically collect when you access the Application, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Application.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="px-4">
          <h2 className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight pb-2 pt-5">
            How We Use Your Information
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-2 text-text-light dark:text-text-dark text-base font-normal leading-relaxed">
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Improve the efficiency and operation of the Application.</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
            <li>Respond to product and customer service requests.</li>
          </ol>
        </section>

        {/* Data Sharing and Disclosure */}
        <section className="px-4">
          <h2 className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight pb-2 pt-5">
            Data Sharing and Disclosure
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, or with your consent. We do not sell your personal data to third parties.
          </p>
        </section>

        {/* User Rights & Choices */}
        <section className="px-4">
          <h2 className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight pb-2 pt-5">
            User Rights & Choices
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1">
            You may at any time review or change the information in your account or terminate your account by logging into your account settings and updating your account. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
          </p>
        </section>

        {/* Data Security */}
        <section className="px-4">
          <h2 className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight pb-2 pt-5">
            Data Security
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="px-4">
          <h2 className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight pb-2 pt-5">
            Changes to This Policy
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1">
            We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        {/* Contact Us */}
        <section className="px-4">
          <h2 className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight pb-2 pt-5">
            Contact Us
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1">
            If you have questions or comments about this Privacy Policy, please contact us at:
            <a 
              className="text-primary dark:text-primary/90 font-medium hover:underline ml-1" 
              href="mailto:privacy@mrcahub.com"
            >
              privacy@mrcahub.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Privacy;