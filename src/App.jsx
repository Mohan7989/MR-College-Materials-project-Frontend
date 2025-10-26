import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Materials from './pages/Materials'
import MaterialDetails from './pages/MaterialDetails'
import Upload from './pages/Upload'
import Admin from './pages/Admin'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import About from './pages/About'
import Semesters from './pages/Semesters'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
        <Header />
        <main className="min-h-screen pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/materials/:id" element={<MaterialDetails />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/semesters" element={<Semesters />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App