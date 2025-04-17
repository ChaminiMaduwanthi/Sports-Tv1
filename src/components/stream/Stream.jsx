
import React from 'react';
import './stream.css';
import rugbyImage from '../../assets/img6.webp'; 
import soccerImage1 from '../../assets/img3.jpg';
import soccerImage2 from '../../assets/img7.jpeg';

import rugbyIcon from '../../assets/rugby.png';
import footballIcon from '../../assets/football.png';
import cricketIcon from '../../assets/cricket.jpg';
import basketballIcon from '../../assets/basketball.jpg';
import othersIcon from '../../assets/other.png';

const Stream = () => {
  const featuredEvents = [
    { id: 1, image: rugbyImage, alt: 'Rugby Match' },
    { id: 2, image: soccerImage1, alt: 'Soccer Match 1' },
    { id: 3, image: soccerImage2, alt: 'Soccer Match 2' },
  ];

  const upcomingMatches = [
    { id: 1, team: 'Team A vs Team B', time: '11:00 AM' },
    { id: 2, team: 'Team A vs Team B', time: '11:00 AM' },
    { id: 3, team: 'Team A vs Team B', time: '16:00 PM' },
    { id: 4, team: 'Team A vs Team B', time: '16:00 PM' },
  ];

  const categories = [
    { id: 1, name: 'Rugby', icon: rugbyIcon },
    { id: 2, name: 'Football', icon: footballIcon },
    { id: 3, name: 'Cricket', icon: cricketIcon },
    { id: 4, name: 'Basketball', icon: basketballIcon },
    { id: 5, name: 'Other Sports', icon: othersIcon },
  ];

  const trendingEvents = [
    { id: 1, type: 'Most Viewed  :  ', name: 'Event Name' },
    { id: 2, type: 'Most Subscribed  :  ', name: 'Event Name' },
    
  ];

  return (
    <div className="stream-container">
      <div className="section-title">Featured Live Events</div>
      <div className="featured-events">
        {featuredEvents.map((event) => (
          <img
            key={event.id}
            src={event.image}
            alt={event.alt}
            className="event-image"
          />
        ))}
      </div>

      <div className="section-title">Upcoming Matches</div>
      <div className="upcoming-matches-categories">
        <div className="upcoming-matches">
          {upcomingMatches.map((match) => (
            <div key={match.id} className="match-item">
              <span>{match.team}</span>
              <span>{match.time}</span>
            </div>
          ))}
        </div>
        <div className="categories">
          <div className="section-title">Categories</div>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-item">
                <img src={category.icon} alt={category.name} />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-title1">Trending Events</div>
      <div className="trending-events">
        {trendingEvents.map((event) => (
          <div key={event.id} className="trending-item">
            <span>{event.type}</span>
            <span>{event.name}</span>
          </div>
        ))}
      </div>

      <div className="action-buttons">
        <button className="action-btn">Start Watching Now</button>
        <button className="action-btn">Become a Content Provider</button>
      </div>
    </div>
  );
};

export default Stream;