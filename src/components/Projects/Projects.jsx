import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState([]);

    useEffect(() => {
        // Simulate loading projects from API or data source
        setTimeout(() => {
            setProjects(projectsData);
            setVisibleProjects(projectsData);
        }, 300);
    }, []);

    useEffect(() => {
        if (filter === 'all') {
            setVisibleProjects(projects);
        } else {
            setVisibleProjects(projects.filter(project =>
                project.categories.includes(filter)
            ));
        }
    }, [filter, projects]);

    // Get unique categories from all projects
    const categories = ['all', ...new Set(projects.flatMap(project => project.categories))];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-description">
                    Here are some of my recent work that showcase my skills and expertise in frontend development.
                </p>

                <div className="project-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <div className="projects-cta">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        See More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;