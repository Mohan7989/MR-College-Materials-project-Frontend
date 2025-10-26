import React from 'react';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-4" style={{ color: '#1976d2', fontWeight: 'bold' }}>
        Welcome to MRCA Students Hub
      </h1>
      <p className="lead">
        Access semester question papers, internships, exam timetable, and more!
      </p>
      <Button href="/semester" variant="primary" size="lg" className="m-2 animate__animated animate__bounce">
        View Semesters
      </Button>
      <Button href="/upload" variant="success" size="lg" className="m-2 animate__animated animate__lightSpeedInLeft">
        Upload Material
      </Button>
      <Button href="/internships" variant="info" size="lg" className="m-2 animate__animated animate__lightSpeedInRight">
        Internships
      </Button>
      {/* Add carousel, notices, and more as we proceed */}
    </div>
  );
}

export default Home;
