import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading projects from API or data source
        setTimeout(() => {
            setProjects(projectsData);
            setVisibleProjects(projectsData);
            setIsLoading(false);
        }, 500);
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="projects" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">
                        Explore my latest work showcasing modern web development practices,
                        responsive design, and innovative solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {categories.map(category => (
                        <motion.button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>

                {isLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading projects...</p>
                    </div>
                ) : (
                    <motion.div
                        className="projects-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence mode="wait">
                            {visibleProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard
                                        project={project}
                                        delay={index * 0.1}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        View More on GitHub
                        <span className="btn-arrow">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;