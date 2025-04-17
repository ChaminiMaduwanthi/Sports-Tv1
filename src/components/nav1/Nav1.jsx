import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav1.css';

const Nav2 = () => {
    const [scrolling, setScrolling] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setScrolling(true); 
            } else if (window.scrollY < lastScrollY) {
                setScrolling(false);
            }
            setLastScrollY(window.scrollY); 
        };

        window.addEventListener('scroll', handleScroll);

       
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`nav2- ${scrolling ? 'nav2-hidden' : 'nav2-visible'}`}>
            <div className="nav2-container">
                <div className="nav2-logo">
                    <span className="play-icon">▶</span>
                    <span className="logo-text">STREAM</span>
                </div>
                <ul className="nav2-links">
                    <li>
                        <Link to="/search">SEARCH</Link>
                    </li>
                    <li>
                        <Link to="/signin">SIGN IN</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/live">LIVE</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav2;
