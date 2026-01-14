import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            {portfolioData.personal.name}
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={() => scrollToSection('hero')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('experience')}>Experience</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>

          <div className="nav-social">
            
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`}>
              <Mail size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;