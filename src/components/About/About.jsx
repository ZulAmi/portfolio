import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const styles = {
        aboutSection: {
            padding: '6rem 2rem',
            background: '#0f172a',
            position: 'relative',
            zIndex: 1,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center'
        },
        aboutContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            position: 'relative',
            zIndex: 1
        },
        aboutContent: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
        },
        aboutText: {
            color: '#f8fafc'
        },
        heading: {
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            color: '#f8fafc',
            fontWeight: 700
        },
        paragraph: {
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
            color: '#94a3b8'
        },
        skillsList: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem'
        },
        skillCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '1.5rem',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        },
        skillHeading: {
            color: '#f8fafc',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            fontWeight: 600
        },
        skillText: {
            color: '#94a3b8',
            fontSize: '0.95rem',
            lineHeight: 1.6
        }
    };

    return (
        <section id="about" style={styles.aboutSection}>
            <motion.div
                style={styles.aboutContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div style={styles.aboutContent}>
                    <motion.div style={styles.aboutText} variants={itemVariants}>
                        <h2 style={styles.heading}>About Me</h2>
                        <p style={styles.paragraph}>
                            I am a passionate full-stack developer with expertise in building modern web applications.
                            My journey in software development started with a curiosity for creating things that live on the internet.
                        </p>
                        <p style={styles.paragraph}>
                            I specialize in JavaScript and its ecosystem, particularly React for frontend development.
                            I'm also experienced in backend technologies and always eager to learn new tools and frameworks.
                        </p>
                    </motion.div>
                    <motion.div style={styles.skillsList} variants={itemVariants}>
                        <div style={styles.skillCard}>
                            <h3 style={styles.skillHeading}>Frontend</h3>
                            <p style={styles.skillText}>React, Next.js, TypeScript</p>
                        </div>
                        <div style={styles.skillCard}>
                            <h3 style={styles.skillHeading}>Backend</h3>
                            <p style={styles.skillText}>Node.js, Express, MongoDB</p>
                        </div>
                        <div style={styles.skillCard}>
                            <h3 style={styles.skillHeading}>Tools</h3>
                            <p style={styles.skillText}>Git, Docker, AWS</p>
                        </div>
                        <div style={styles.skillCard}>
                            <h3 style={styles.skillHeading}>Design</h3>
                            <p style={styles.skillText}>Figma, CSS, Tailwind</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;