import React from 'react';
import './live.css';
import relatedImage1 from '../../assets/img1.webp';
import relatedImage2 from '../../assets/img8.jpg';
import relatedImage3 from '../../assets/pic1.jpeg';

const VideoEmbed = () => {
  return (
    <div className="video-embed">
      <iframe
        src="https://www.youtube.com/embed/pjnBbDcJB9Q" 
        title="Test Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Live = () => {
  const relatedMatches = [
    { id: 1, image: relatedImage1, alt: 'Related Match 1' },
    { id: 2, image: relatedImage2, alt: 'Related Match 2' },
    { id: 3, image: relatedImage3, alt: 'Related Match 3' },
  ];

  return (
    <div className="live-container">
      <div className="main-content">
        <div className="video-player">
          <VideoEmbed />
          <div className="video-overlay">BRKSE</div>
        </div>

        <div className="chat-section">
          <div className="chat-title">CHAT</div>
          <div className="chat-messages">
            Who do you think will win today?
          </div>
          <input type="text" className="chat-input" placeholder="Add a comment..." />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </div>

      <div className="related-matches">
        <div className="related-title">RELATED MATCHES</div>
        <div className="matches-grid">
          {relatedMatches.map((match) => (
            <div key={match.id} className="match-item">
              <img src={match.image} alt={match.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Live;