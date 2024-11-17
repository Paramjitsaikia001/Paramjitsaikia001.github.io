import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Skill from './Components/Skill';
import Education from './Components/Education'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Github from './Components/Github'
function App() {
  return (
      <Router>
        <div className="bg-gray-800 min-h-screen flex">
          <Navbar />
          <Routes>
            <Route path="/" element={<Profile/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/skill" element={<Skill/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/Github" element={<Github/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
