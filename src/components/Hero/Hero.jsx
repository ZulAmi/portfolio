import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const [isTypingName, setIsTypingName] = useState(false);
    const [nameText, setNameText] = useState('');
    const introText = "Hi, I'm ";
    const fullNameText = "Muhammad Zulhilmi";

    useEffect(() => {
        if (text.length < introText.length) {
            const timeout = setTimeout(() => {
                setText(introText.slice(0, text.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
        else if (nameText.length < fullNameText.length) {
            if (!isTypingName) setIsTypingName(true);
            const timeout = setTimeout(() => {
                setNameText(fullNameText.slice(0, nameText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [text, nameText, isTypingName, introText, fullNameText]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
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
        <section className="hero" id="home">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="typewriter-container">
                        <motion.h1
                            className="typewriter-text"
                            variants={itemVariants}
                        >
                            {text}
                            {isTypingName && (
                                <span className="highlight typewriter-name">
                                    {nameText}
                                    {nameText.length === fullNameText.length ? "" : null}
                                </span>
                            )}
                            <span className="cursor blinking"></span>
                        </motion.h1>
                    </div>

                    <motion.h2
                        className="hero-subtitle"
                        variants={itemVariants}
                    >
                        Frontend Developer
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        variants={itemVariants}
                    >
                        I craft responsive, user-friendly interfaces with modern web technologies.
                        Specializing in React, Next.js, and modern UI/UX practices.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        variants={itemVariants}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <span className="btn-arrow">→</span>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get In Touch
                            <span className="btn-arrow">→</span>
                        </a>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        variants={itemVariants}
                    >
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="social-link"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="social-link"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="social-link"
                        >
                            <FaTwitter />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {/* Add your hero image or illustration here */}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;