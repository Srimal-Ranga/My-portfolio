import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    filter === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fade-in' : ''}`}>
          Featured Projects
        </h2>
        <p className={`section-subtitle ${inView ? 'animate-fade-in' : ''}`}>
          Here are some of my recent works
        </p>

        <div className={`project-filters ${inView ? 'animate-fade-in' : ''}`}>
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;