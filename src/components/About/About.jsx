import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { y: 15, opacity: 0 },
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
        <section id="about">
            <motion.div
                className="about-container"
                // Remove animations temporarily for testing 
                // variants={containerVariants}
                // initial="hidden"
                // whileInView="visible"
                initial={{ opacity: 1 }} // Force visibility
            // viewport={{ once: true, amount: 0.1 }}
            >
                <div className="about-content">
                    <motion.div className="about-text" variants={itemVariants}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className="about-section-title">About</span>
                        </div>
                        <h2 className="heading">
                            Professional Background
                            <div className="heading-underline"></div>
                        </h2>
                        <p className="paragraph">
                            I'm a <span className="highlight">full-stack developer</span> with extensive experience crafting responsive,
                            high-performance web applications. My approach combines technical expertise with creative
                            problem-solving to deliver exceptional user experiences.
                        </p>
                        <p className="paragraph">
                            With a strong foundation in the JavaScript ecosystem, I specialize in building modern applications
                            using React and Next.js. My backend proficiency includes creating robust APIs and managing database
                            architectures that scale efficiently with business needs.
                        </p>
                        <p className="paragraph">
                            I'm committed to continuous learning and keeping pace with emerging technologies to implement
                            best practices in software development.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <div style={{ marginBottom: '2rem' }}>
                            <span className="about-section-title">Expertise</span>
                            <h3 className="heading subheading">
                                Technical Skills
                                <div className="heading-underline"></div>
                            </h3>
                        </div>
                        <motion.div className="skills-list" variants={containerVariants}>
                            <motion.div className="skill-card" whileHover={{ y: -5 }} variants={itemVariants}>
                                <h3 className="skill-heading">Frontend</h3>
                                <p className="skill-text">React, Next.js, TypeScript, Redux</p>
                            </motion.div>
                            <motion.div className="skill-card" whileHover={{ y: -5 }} variants={itemVariants}>
                                <h3 className="skill-heading">Backend</h3>
                                <p className="skill-text">Node.js, Express, MongoDB, PostgreSQL</p>
                            </motion.div>
                            <motion.div className="skill-card" whileHover={{ y: -5 }} variants={itemVariants}>
                                <h3 className="skill-heading">DevOps</h3>
                                <p className="skill-text">Git, Docker, AWS, CI/CD</p>
                            </motion.div>
                            <motion.div className="skill-card" whileHover={{ y: -5 }} variants={itemVariants}>
                                <h3 className="skill-heading">Design</h3>
                                <p className="skill-text">Figma, Tailwind CSS, Responsive Design</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;