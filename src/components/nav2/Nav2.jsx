import React from 'react';
import { Link } from 'react-router-dom';
import './nav2.css';



const Nav1 = () => {
  return (
    <div className="nav-container">
      <nav className="nav-content">
        <Link to="/"><h1 className="nav-logo">SPORTS-TV.NETWORK</h1></Link>
        <div className="nav-links">
          {/* This will navigate to /live page */}
          <Link to="/live" className="nav-link live">LIVE</Link>
          <Link to="/schedule" className="nav-link live">SCHEDULE</Link>
          <Link to="/ondemand" className="nav-link live">ON DEMAND</Link>

          
        </div>
      </nav>
    </div>
  );
};

export default Nav1;
