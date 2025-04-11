import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', message: '' }); // Reset form
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // Reset success message after 3 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 3000);
        }, 1500);
    };

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
        <section className={styles.contactSection} id="contact">
            <motion.div
                className={styles.contactContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className={styles.contactHeader} variants={itemVariants}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleAccent}>Get</span> In Touch
                    </h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.sectionDescription}>
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </motion.div>

                <div className={styles.contactContent}>
                    <motion.div className={styles.contactInfo} variants={itemVariants}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <FaEnvelope />
                            </div>
                            <h3>Email</h3>
                            <p>your.email@example.com</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <FaPhone />
                            </div>
                            <h3>Phone</h3>
                            <p>+1 (123) 456-7890</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <FaMapMarkerAlt />
                            </div>
                            <h3>Location</h3>
                            <p>New York, NY, USA</p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.contactForm} variants={itemVariants}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={styles.formInput}
                                    placeholder="Your name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={styles.formInput}
                                    placeholder="Your email"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={styles.formTextarea}
                                    placeholder="Your message"
                                    rows="5"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? (
                                    <span className={styles.loadingText}>Sending...</span>
                                ) : (
                                    <>
                                        <FaPaperPlane className={styles.submitIcon} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </motion.button>

                            {submitSuccess && (
                                <motion.div
                                    className={styles.successMessage}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;