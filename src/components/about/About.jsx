import React from 'react';
import './about.css';
import pic1 from '../../assets/img6.webp';
import pic2 from '../../assets/img3.jpg';
import pic3 from '../../assets/img4.jpg';
import pic4 from '../../assets/img7.jpeg';
import app from '../../assets/images.jpg';
import down from '../../assets/down-app.webp';

const About = () => {
  const yourFunction = () => {
    alert('Image button clicked!');
  };

  return (
    <div className="home-container">
     
      <div className="banner-image">
        <img src={pic1} alt="Sports Banner" />
      </div>

      
      <h2 className="main-heading">STREAM YOUR FAVORITE SPORTS</h2>
      <button className="watch-now-btn">WATCH NOW</button>

      
      <div className="live-tags-grid">
        <div className="live-tag1">LIVE NOW</div>
        <div className="live-tag2">FEATURED</div>
        <div className="live-tag3">BASKETBALL</div>
      </div>

      {/* Sections */}
      <div className="sections sections-bordered">
        <div className="section">
          <div className="section-image live">
            <img src={pic1} alt="Live Match" />
          </div>
          <p className="section-title">TEAM A vs TEAM B</p>
        </div>
        <div className="section">
          <div className="section-image">
            <img src={pic2} alt="Featured" />
          </div>
          <p className="section-title">SPORTS CENTER</p>
        </div>
        <div className="section">
          <div className="section-image">
            <img src={pic3} alt="Basketball" />
          </div>
          <p className="section-title">LEAGUE MATCH</p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-image">
          <img src={pic4} alt="About Sports TV" />
        </div>
        <div className="about-text">
          <h3 className="about-heading">ABOUT SPORTS TV</h3>
          <p>
            Provides independent grading and entertainment strategy.
            Lorem ipsum bellor sit amit,
            consectetur adipiscing elit. Sellentespot dolor.
            Possibly unbiased evaluation or scoring.
            Likely refers to a plan or approach for engaging audiences 
            through entertainment.
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="download-buttons">
        <button className="image-button" onClick={yourFunction}>
          <img src={app} alt="App Store" />
        </button>
        <button className="image-button" onClick={yourFunction}>
          <img src={down} alt="Download App" />
        </button>
      </div>
    </div>
  );
};

export default About;