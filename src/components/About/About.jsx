import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
        <section id="about" style={{
            border: '5px solid red',
            minHeight: '400px',
            background: '#ffffff',
            padding: '50px',
            margin: '20px 0'
        }}>
            <h1>ABOUT SECTION TEST</h1>
            <motion.div
                className="about-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="about-content">
                    <motion.div className="about-text" variants={itemVariants}>
                        <span className="about-section-title">About Me</span>
                        <h2 className="heading">
                            Your Next <span className="highlight">Front-End Innovator</span>
                            <div className="heading-underline"></div>
                        </h2>
                        <p className="paragraph">
                            Hello! I’m a <span className="highlight">full-stack developer</span> passionate about building digital experiences that delight users and drive business results. My approach blends technical mastery with a creative mindset, ensuring every project is both robust and visually engaging.
                        </p>
                        <div className="about-quick-facts">
                            <div>
                                <span className="fact-label">Experience:</span>
                                <span className="fact-value">5+ years</span>
                            </div>
                            <div>
                                <span className="fact-label">Projects Delivered:</span>
                                <span className="fact-value">30+</span>
                            </div>
                            <div>
                                <span className="fact-label">Remote Ready:</span>
                                <span className="fact-value">Yes</span>
                            </div>
                        </div>
                        <p className="paragraph">
                            I thrive in collaborative, agile teams and love turning complex problems into elegant solutions. My code is clean, scalable, and always user-focused.
                        </p>
                        <div className="about-cta">
                            <a href="#contact" className="about-hire-btn">
                                Let’s Build Something Great Together
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="about-expertise" variants={itemVariants}>
                        <span className="about-section-title">Core Strengths</span>
                        <h3 className="heading subheading">
                            What Sets Me Apart
                            <div className="heading-underline"></div>
                        </h3>
                        <ul className="about-strengths-list">
                            <li>
                                <strong>Pixel-Perfect UI:</strong> Meticulous attention to detail with modern frameworks (React, Next.js, Tailwind).
                            </li>
                            <li>
                                <strong>Performance-Driven:</strong> Optimized code for speed, SEO, and accessibility.
                            </li>
                            <li>
                                <strong>Team Player:</strong> Excellent communicator, mentor, and collaborator.
                            </li>
                            <li>
                                <strong>Continuous Learner:</strong> Always up-to-date with the latest tech and best practices.
                            </li>
                        </ul>
                        <div className="about-tech-icons">
                            <span title="React">⚛️</span>
                            <span title="Next.js">▲</span>
                            <span title="TypeScript">📘</span>
                            <span title="Node.js">🟢</span>
                            <span title="Figma">🎨</span>
                            <span title="AWS">☁️</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;