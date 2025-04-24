import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => (
    <section className={styles.heroSection}>
        <div className={styles.heroContent}>
            <div className={styles.textContent}>
                <h1 className={styles.title}>
                    <span className={styles.gradientText}>Creative</span> Developer
                </h1>
                <p className={styles.subtitle}>
                    Building modern, user-focused web solutions.
                </p>
                <div className={styles.ctaContainer}>
                    <button className={styles.primaryButton}>View Projects</button>
                    <button className={styles.secondaryButton}>Contact</button>
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                </div>
            </div>
            <div className={styles.visualContent}>
                <div className={styles.profileImage}>
                    <img src="/profile.jpg" alt="Profile" />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;