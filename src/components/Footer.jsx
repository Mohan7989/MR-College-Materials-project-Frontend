import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-3 bg-light mt-auto">
      <div>
        &copy; {new Date().getFullYear()} MRCA Students Hub. All rights reserved.
      </div>
      <div>
        <a href="/terms">Terms</a> | <a href="/privacy">Privacy</a>
      </div>
    </footer>
  );
}

export default Footer;
