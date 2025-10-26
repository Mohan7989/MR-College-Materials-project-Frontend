import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-card-light dark:bg-card-dark mt-6 py-8 px-4 text-center">
      <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
        <p>Contact: <a className="hover:underline" href="mailto:info@mrcahub.com">info@mrcahub.com</a></p>
        <p className="mt-2">© 2024 MRCA Students Hub. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer