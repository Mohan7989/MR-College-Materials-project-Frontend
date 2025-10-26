import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Semester from './pages/Semester';
import Upload from './pages/Upload';
import TimetablePage from './pages/Timetable';
import Internships from './pages/Internships';
import Notices from './pages/Notices';
import AdminPanel from './pages/AdminPanel';

import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <Header />
      <main className="container py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/semester" element={<Semester />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
