import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <h3>Visit Us</h3>
          <p>123 Restaurant Street</p>
          <p>City, State 12345</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="hours">
          <h3>Hours</h3>
          <p>Mon-Fri: 11am - 10pm</p>
          <p>Sat-Sun: 10am - 11pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
