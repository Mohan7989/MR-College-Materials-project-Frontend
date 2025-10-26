import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark p-8">
      <h1 className="text-3xl font-bold text-text-light dark:text-text-dark text-center">
        MRCA STUDENTS HUB
      </h1>
      <p className="text-text-muted-light dark:text-text-muted-dark text-center mt-4">
        Welcome to MRCA Students Hub - ONLY FOR STUDENTS
      </p>
      <div className="mt-8 text-center">
        <p className="text-text-light dark:text-text-dark">
          Website is loading... If you see this, the basic setup is working!
        </p>
      </div>
    </div>
  )
}

export default Home