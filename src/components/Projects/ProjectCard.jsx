import React, { useState } from 'react';
import './ProjectCard.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, delay }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { title, description, image, technologies, demoLink, codeLink, features } = project;

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: delay + 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
        >
            <motion.div
                className="project-image"
                variants={imageVariants}
                whileHover="hover"
            >
                <img src={image} alt={title} loading="lazy" />
                <motion.div
                    className={`project-overlay ${showDetails ? 'show' : ''}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showDetails ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="project-links">
                        {demoLink && (
                            <motion.a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaExternalLinkAlt />
                                <span>Live Demo</span>
                            </motion.a>
                        )}
                        {codeLink && (
                            <motion.a
                                href={codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub />
                                <span>View Code</span>
                            </motion.a>
                        )}
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="project-content"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
            >
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                {features && (
                    <div className="project-features">
                        <h4>Key Features</h4>
                        <ul>
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: delay + 0.3 + index * 0.1 }}
                                >
                                    <FaCode className="feature-icon" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="project-tech">
                    {technologies.map((tech, index) => (
                        <motion.span
                            key={index}
                            className="tech-tag"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: delay + 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;