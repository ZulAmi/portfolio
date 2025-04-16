import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaRegSmile } from 'react-icons/fa';
import './Contact.css';

const funFacts = [
    "I reply to most emails within 24 hours.",
    "Let's build something amazing together!",
    "I love creative collaborations.",
    "Remote work? Absolutely!",
    "Coffee chats are welcome ☕"
];

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [fact, setFact] = useState(funFacts[0]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSent(true);
        setFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
        setTimeout(() => setSent(false), 3500);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-professional">
            <div className="contact-professional-bg"></div>
            <div className="contact-professional-content">
                <div className="contact-professional-header">
                    <h2>
                        <span className="contact-gradient">Let's Connect</span>
                    </h2>
                    <p>
                        I value meaningful connections and creative opportunities.<br />
                        <span className="contact-fact"><FaRegSmile /> {fact}</span>
                    </p>
                </div>
                <div className="contact-professional-grid">
                    <div className="contact-professional-info">
                        <div className="info-block">
                            <FaEnvelope className="info-icon" />
                            <a href="mailto:your.email@example.com">your.email@example.com</a>
                        </div>
                        <div className="info-block">
                            <FaPhone className="info-icon" />
                            <a href="tel:+11234567890">+1 (123) 456-7890</a>
                        </div>
                        <div className="info-block">
                            <FaMapMarkerAlt className="info-icon" />
                            <span>New York, NY, USA</span>
                        </div>
                    </div>
                    <form className="contact-professional-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                        />
                        <button type="submit" className={`professional-send${sent ? ' sent' : ''}`}>
                            <FaPaperPlane className="send-icon" />
                            {sent ? "Sent!" : "Send Message"}
                        </button>
                        {sent && <div className="professional-success">Thank you! I'll be in touch soon.</div>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;