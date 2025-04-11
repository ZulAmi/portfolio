import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import styles from './Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'Tech Company A',
            duration: 'Jan 2020 - Present',
            description: 'Developed and maintained user interfaces for web applications using React and Redux.',
            icon: 'briefcase'
        },
        {
            title: 'Web Developer Intern',
            company: 'Startup B',
            duration: 'Jun 2019 - Dec 2019',
            description: 'Assisted in the development of responsive websites and web applications.',
            icon: 'code'
        },
        {
            title: 'Freelance Developer',
            company: 'Self-Employed',
            duration: 'Jan 2018 - May 2019',
            description: 'Worked on various freelance projects, focusing on frontend development and UI/UX design.',
            icon: 'graduation'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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
        <section className={styles.experienceSection} id="experience">
            <motion.div
                className={styles.experienceContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className={styles.experienceHeader} variants={itemVariants}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleAccent}>Work</span> Experience
                    </h2>
                    <div className={styles.titleUnderline}></div>
                </motion.div>

                <motion.div className={styles.experienceGrid} variants={itemVariants}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={styles.experienceCard}
                            variants={itemVariants}
                        >
                            <div className={styles.experienceIcon}>
                                {exp.icon === 'briefcase' && <FaBriefcase />}
                                {exp.icon === 'code' && <FaCode />}
                                {exp.icon === 'graduation' && <FaGraduationCap />}
                            </div>
                            <h3 className={styles.experienceTitle}>{exp.title}</h3>
                            <p className={styles.companyInfo}>{exp.company} | {exp.duration}</p>
                            <p className={styles.experienceDescription}>{exp.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Experience;