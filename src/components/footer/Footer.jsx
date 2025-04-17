import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      
<div className="footer footer-bordered">

<div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={24} color="#ffffff" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={24} color="#ffffff" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={24} color="#ffffff" />
  </a>
</div>

</div>
    </div>
  )
}

export default Footer
