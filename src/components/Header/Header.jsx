import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-card-light dark:bg-card-dark p-4 justify-between shadow-sm">
      <button className="flex items-center justify-center size-10 rounded-full text-text-light dark:text-text-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="flex flex-col items-center">
        <h1 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-tight">
          MRCA STUDENTS HUB
        </h1>
        <p className="text-text-muted-light dark:text-text-muted-dark text-xs font-normal leading-normal">
          ONLY FOR STUDENTS
        </p>
      </div>
      <button className="flex items-center justify-center size-10 rounded-full text-text-light dark:text-text-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors">
        <span className="material-symbols-outlined">search</span>
      </button>
    </header>
  )
}

export default Header