import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

  // Import the GIF directly from the src folder

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // The minimalistic navbar
import HomePage from './components/HomePage';  // Home Page component
import AboutPage from './components/AboutPage';  // About Page component



const App = () => {
  return (
    <Router>
      <Navbar /> {/* Minimalistic Navbar on top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};


export default App;
