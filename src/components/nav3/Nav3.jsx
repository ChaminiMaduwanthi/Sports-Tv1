import React from 'react';
import './nav3.css';
import logo from '../../assets/live-logo.png';

const Nav3 = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={logo} alt="Live Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <a href="#livestreaming">LIVE STREAMING</a>
        <a href="#ondemand">ON-DEMAND</a>
        <a href="#dashboard">DASHBOARD</a>
      </div>
      <button className="subscribe-btn">SUBSCRIBE</button>
    </nav>
  );
};

export default Nav3;
