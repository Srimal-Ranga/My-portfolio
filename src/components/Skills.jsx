import React from 'react';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

const SkillBar = ({ skill, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`skill-item ${inView ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: inView ? `${skill.level}%` : '0%',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fade-in' : ''}`}>
          Skills & Technologies
        </h2>

        <div className="skills-grid">
          <div className={`skill-category ${inView ? 'animate-slide-in-left' : ''}`}>
            <h3 className="category-title">Frontend</h3>
            <div className="skills-list">
              {portfolioData.skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className={`skill-category ${inView ? 'animate-fade-in' : ''}`}>
            <h3 className="category-title">Backend</h3>
            <div className="skills-list">
              {portfolioData.skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className={`skill-category ${inView ? 'animate-slide-in-right' : ''}`}>
            <h3 className="category-title">Tools & Others</h3>
            <div className="skills-list">
              {portfolioData.skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;