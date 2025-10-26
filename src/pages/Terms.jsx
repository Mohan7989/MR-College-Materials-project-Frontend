import React from 'react';

function Terms() {
  return (
    <div className="bg-white p-4 rounded shadow animate__animated animate__fadeIn">
      <h2 className="mb-4 text-primary">Terms & Conditions</h2>
      <p>
        Welcome to MRCA Students Hub! By accessing or using our services, you agree to the following terms:
      </p>
      <ul>
        <li>Materials uploaded by users may be reviewed and approved by administrators for quality and appropriateness.</li>
        <li>Your use of this site is subject to applicable local laws and educational guidelines.</li>
        <li>All downloadable content is for educational purposes only and should not be shared or redistributed improperly.</li>
        <li>Administrators may remove or modify materials and notices at their discretion.</li>
        <li>We reserve the right to update these terms as required.</li>
      </ul>
      <p>
        If you have questions regarding these terms, please contact us via the provided support links.
      </p>
    </div>
  );
}

export default Terms;
