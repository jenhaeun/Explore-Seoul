// src/components/NavBar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; // Import your CSS file

function NavBar() {
  // Get the current path
  const location = useLocation();

  // Determine which tab is active based on the path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navBarContainer">
      <Link to="/" className={`navItem ${isActive('/') ? 'active' : ''}`}>
        <img
          src={isActive('/') ? "/assets/icons/home_selected.png" : "/assets/icons/home.png"}
          alt="Home"
          className="navIcon1"
        />
        Home
      </Link>
      <Link to="/map" className={`navItem ${isActive('/map') ? 'active' : ''}`}>
        <img
          src={isActive('/map') ? "/assets/icons/map_selected.png" : "/assets/icons/map.png"}
          alt="Map"
          className="navIcon2"
        />
        Map
      </Link>
      <Link to="/travel" className={`navItem ${isActive('/travel') ? 'active' : ''}`}>
        <img
          src={isActive('/travel') ? "/assets/icons/travel_selected.png" : "/assets/icons/travel.png"}
          alt="Travel"
          className="navIcon1"
        />
        Travel
      </Link>
      <Link to="/more" className={`navItem ${isActive('/more') ? 'active' : ''}`}>
        <img
          src={isActive('/more') ? "/assets/icons/more_selected.png" : "/assets/icons/more.png"}
          alt="More"
          className="navIcon3"
        />
        More
      </Link>
    </div>
  );
}

export default NavBar;
