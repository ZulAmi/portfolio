import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import skillsData from '../../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
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

    const skillVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className={styles.skillsSection} id="skills">
            <motion.div
                className={styles.skillsContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className={styles.skillsHeader} variants={itemVariants}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleAccent}>My</span> Skills
                    </h2>
                    <div className={styles.titleUnderline}></div>
                </motion.div>

                <motion.div className={styles.skillsGrid} variants={itemVariants}>
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={styles.skillCard}
                            variants={skillVariants}
                        >
                            <div className={styles.skillIcon}>
                                {skill.icon === 'code' && <FaCode />}
                                {skill.icon === 'laptop' && <FaLaptopCode />}
                                {skill.icon === 'mobile' && <FaMobileAlt />}
                                {skill.icon === 'server' && <FaServer />}
                            </div>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;