import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="project-card animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            {project.github && (
              
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={20} />
              </a>
            )}
            {project.live && (
              
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;