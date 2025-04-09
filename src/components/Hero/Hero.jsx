import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    const [text, setText] = useState('');
    const [isTypingName, setIsTypingName] = useState(false);
    const [nameText, setNameText] = useState('');
    const introText = "Hi, I'm ";
    const fullNameText = "Muhammad Zulhilmi";

    useEffect(() => {
        // Type the intro text first
        if (text.length < introText.length) {
            const timeout = setTimeout(() => {
                setText(introText.slice(0, text.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
        // After intro is complete, start typing the name
        else if (nameText.length < fullNameText.length) {
            if (!isTypingName) setIsTypingName(true);
            const timeout = setTimeout(() => {
                setNameText(fullNameText.slice(0, nameText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [text, nameText, isTypingName, introText, fullNameText]);

    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text">
                    {/* Fixed-height typewriter container */}
                    <div className="typewriter-container">
                        <h1 className="typewriter-text">
                            {text}
                            {isTypingName && (
                                <span className="highlight typewriter-name">
                                    {nameText}
                                    {nameText.length === fullNameText.length ? "" : null}
                                </span>
                            )}
                            <span className="cursor blinking"></span>
                        </h1>
                    </div>
                </div>
                <div>
                    <h2 className="hero-subtitle">Frontend Developer</h2>
                    <p>I craft responsive, user-friendly interfaces with modern web technologies.</p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-image">
                {/* Rest of your code */}
            </div>

        </section >
    );
};

export default Hero;