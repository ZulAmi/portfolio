import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

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
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.3,
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
            className={styles.projectCard}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            layout
        >
            <div className={styles.cardImageContainer}>
                <motion.div
                    className={styles.imageWrapper}
                    variants={imageVariants}
                    whileHover="hover"
                >
                    <img src={image} alt={title} className={styles.projectImage} />
                    <div className={styles.imageOverlay}>
                        <div className={styles.techStack}>
                            {technologies.map((tech, index) => (
                                <span key={index} className={styles.techTag}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className={styles.cardContent}
                variants={contentVariants}
            >
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectDescription}>{description}</p>

                <div className={styles.featuresList}>
                    {features && features.slice(0, 3).map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                            <FaCode className={styles.featureIcon} />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.projectLinks}>
                    {codeLink && (
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkButton}
                        >
                            <FaGithub className={styles.linkIcon} />
                            <span>View Code</span>
                        </a>
                    )}
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.linkButton} ${styles.primaryLink}`}
                        >
                            <FaExternalLinkAlt className={styles.linkIcon} />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;