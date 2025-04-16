import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App professional-theme">
            <Header />
            <main className="main-content">
                <section id="hero-section" className="section hero-section">
                    <Hero />
                </section>
                <section id="about-section" className="section about-section">
                    <About />
                </section>
                <section id="skills-section" className="section skills-section">
                    <Skills />
                </section>
                <section id="projects-section" className="section projects-section">
                    <Projects />
                </section>
                <section id="experience-section" className="section experience-section">
                    <Experience />
                </section>
                <section id="contact-section" className="section contact-section">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;