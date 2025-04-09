import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section based on scroll position
            const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="progress-bar" style={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}></div>
            <div className="container header-container">
                <div className="logo">
                    <a href="#home" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}>
                        <span className="logo-icon">&lt;/&gt;</span>
                        <span className="logo-text">Muhammad Zulhilmi Bin Rahmat</span>
                    </a>
                </div>

                <button className="mobile-menu-btn" onClick={() => toggleMobileMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`navigation ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {[
                            { id: 'home', label: 'Home' },
                            { id: 'about', label: 'About' },
                            { id: 'projects', label: 'Projects' },
                            { id: 'skills', label: 'Skills' },
                            { id: 'experience', label: 'Experience' },
                            { id: 'contact', label: 'Contact' }
                        ].map(item => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={activeSection === item.id ? 'active' : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;