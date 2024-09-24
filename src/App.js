import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Map from './components/Map';
import Travel from './components/Travel';
import More from './components/More';
import NavBar from './components/NavBar';
import './index.css'
import './App.css'


function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '70px' }}>
        {/* Ensure content doesn't overlap with the navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/more" element={<More />} />
        </Routes>
      <NavBar />
      </div>
    </Router>
    
  );
}

export default App;