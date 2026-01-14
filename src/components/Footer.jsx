import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Made with <Heart size={16} className="heart-icon" /> by{' '}
            {portfolioData.personal.name}
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;