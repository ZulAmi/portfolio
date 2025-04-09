import React, { useState } from 'react';
import './ProjectCard.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ project, delay }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { title, description, image, technologies, demoLink, codeLink, features } = project;

    return (
        <div
            className="project-card"
            style={{ animationDelay: `${delay}s` }}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
        >
            <div className="project-image">
                <img src={image} alt={title} loading="lazy" />
                <div className={`project-overlay ${showDetails ? 'show' : ''}`}>
                    <div className="project-links">
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaExternalLinkAlt /> <span>Live Demo</span>
                            </a>
                        )}
                        {codeLink && (
                            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaGithub /> <span>View Code</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                {features && (
                    <div className="project-features">
                        <h4>Key Features:</h4>
                        <ul>
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <FaCode className="feature-icon" /> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="project-tech">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;