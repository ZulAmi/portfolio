import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects';
import styles from './Projects.module.css';

const Projects = () => {
    // Initial state setup
    const [projects, setProjects] = useState(projectsData); // Direct assignment
    const [filter, setFilter] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState(projectsData); // Direct assignment
    const [isLoading, setIsLoading] = useState(false); // Set to false initially

    // Remove the initial loading setTimeout that might be causing issues

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
        <section className={styles.projectsSection} id="projects">
            <motion.div
                className={styles.projectsContainer}
                initial={{ opacity: 1 }} // Force visibility
            // variants={containerVariants} 
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className={styles.projectsHeader} variants={itemVariants}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleAccent}>Featured</span> Projects
                    </h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.sectionDescription}>
                        Explore my latest work and personal projects
                    </p>
                </motion.div>

                <motion.div className={styles.filterContainer} variants={itemVariants}>
                    <div className={styles.filterButtons}>
                        {categories.map((category, index) => (
                            <motion.button
                                key={index}
                                className={`${styles.filterButton} ${filter === category ? styles.activeFilter : ''}`}
                                onClick={() => setFilter(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {isLoading ? (
                    <motion.div
                        className={styles.loadingContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={styles.loader}></div>
                        <p>Loading projects...</p>
                    </motion.div>
                ) : (
                    <motion.div
                        className={styles.projectsGrid}
                        layout
                    >
                        <AnimatePresence mode="wait">
                            {visibleProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    delay={index * 0.1}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {!isLoading && visibleProjects.length === 0 && (
                    <motion.div
                        className={styles.noProjects}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p>No projects found in this category.</p>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default Projects;