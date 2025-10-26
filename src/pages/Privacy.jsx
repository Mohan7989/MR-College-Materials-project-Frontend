import React from 'react';

function Privacy() {
  return (
    <div className="bg-white p-4 rounded shadow animate__animated animate__fadeIn">
      <h2 className="mb-4 text-success">Privacy Policy</h2>
      <p>
        MRCA Students Hub values your privacy:
      </p>
      <ul>
        <li>Personal information you provide (such as names, emails) is never shared outside the service and is protected according to best practices.</li>
        <li>Uploaded files are stored securely and only used for educational purposes.</li>
        <li>We use cookies only for basic site functionality and user experience improvements.</li>
        <li>You may contact administrators to request deletion of personal data or uploaded materials.</li>
        <li>Policy updates will be posted here; please check regularly for changes.</li>
      </ul>
      <p>
        For privacy questions, reach out to our support team.
      </p>
    </div>
  );
}

export default Privacy;
