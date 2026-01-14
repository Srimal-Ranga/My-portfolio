import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ExperienceCard = ({ item, index, type }) => {
  return (
    <div
      className="experience-card animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="experience-icon">
        {type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
      </div>

      <div className="experience-content">
        <h3 className="experience-title">
          {type === 'work' ? item.title : item.degree}
        </h3>
        <h4 className="experience-company">
          {type === 'work' ? item.company : item.school}
        </h4>

        <div className="experience-meta">
          <span className="experience-period">
            <Calendar size={16} />
            {item.period}
          </span>
          <span className="experience-location">
            <MapPin size={16} />
            {item.location}
          </span>
        </div>

        {type === 'work' && item.description && (
          <ul className="experience-description">
            {item.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        )}

        {type === 'education' && item.description && (
          <p className="experience-text">{item.description}</p>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fade-in' : ''}`}>
          Experience & Education
        </h2>

        <div className="experience-grid">
          <div className={`experience-column ${inView ? 'animate-slide-in-left' : ''}`}>
            <h3 className="column-title">
              <Briefcase size={24} />
              Work Experience
            </h3>
            <div className="experience-list">
              {portfolioData.experience.map((exp, index) => (
                <ExperienceCard
                  key={exp.id}
                  item={exp}
                  index={index}
                  type="work"
                />
              ))}
            </div>
          </div>

          <div className={`experience-column ${inView ? 'animate-slide-in-right' : ''}`}>
            <h3 className="column-title">
              <GraduationCap size={24} />
              Education
            </h3>
            <div className="experience-list">
              {portfolioData.education.map((edu, index) => (
                <ExperienceCard
                  key={edu.id}
                  item={edu}
                  index={index}
                  type="education"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;