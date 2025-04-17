import React, { useState, useEffect } from 'react';
import './signin.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Signin = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const msg = urlParams.get('msg');

    if (msg === 'success') {
      alert("Registration successful! Please login.");
    } else if (msg === 'exists') {
      alert("Email already exists! Please use a different email.");
    } else if (msg === 'error') {
      alert("Registration failed. Please try again.");
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Implement register API call
    console.log("Register form submitted");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement login API call
    console.log("Login form submitted");
  };

  return (
    <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <div className="social-container">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>

          </div>
          <div className="infield">
            <input type="text" placeholder="Name" name="name" required />
            <label></label>
          </div>
          <div className="infield">
            <input type="email" placeholder="Email" name="email" required />
            <label></label>
          </div>
          <div className="infield">
            <input type="text" placeholder="Phone Number" name="phoneNumber" required />
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" name="password" required />
            <label></label>
          </div>
          <input type="hidden" name="role" value="user" />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Login Form */}
      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}>
          <h1>Log in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <div className="infield">
            <input type="email" placeholder="Email" name="email" required />
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" name="password" required />
            <label></label>
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>

      {/* Overlay */}
      <div className="overlay-container" id="overlayCon">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <div className="logo-container">
             
            </div>
            <h1>One of Us?</h1>
            <p>Sign in and continue your movie journey with us!</p>
            <button onClick={() => setRightPanelActive(false)}>Log In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <div className="logo-container">
              
            </div>
            <h1>New Here?</h1>
            <p>Join us and experience the best movie booking experience!</p>
            <button onClick={() => setRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
