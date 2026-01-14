import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title animate-fade-in">
            Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
          </h1>
          <h2 className="hero-subtitle animate-fade-in-delay-1">
            {portfolioData.personal.title}
          </h2>
          <p className="hero-description animate-fade-in-delay-2">
            {portfolioData.personal.subtitle}
          </p>

          <div className="hero-buttons animate-fade-in-delay-3">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
            
              href={portfolioData.personal.resume}
              className="btn btn-secondary"
              download
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image animate-fade-in-delay-2">
          <div className="image-placeholder">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <button className="scroll-down" onClick={scrollToAbout}>
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;