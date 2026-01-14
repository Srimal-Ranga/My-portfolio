import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fade-in' : ''}`}>
          About Me
        </h2>

        <div className="about-content">
          <div className={`about-text ${inView ? 'animate-slide-in-left' : ''}`}>
            <p className="about-bio">{portfolioData.personal.bio}</p>

            <div className="about-info">
              <div className="info-item">
                <MapPin size={20} />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="info-item">
                <Mail size={20} />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="info-item">
                <Phone size={20} />
                <span>{portfolioData.personal.phone}</span>
              </div>
            </div>
          </div>

          <div className={`about-stats ${inView ? 'animate-slide-in-right' : ''}`}>
            <div className="stat-card">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;