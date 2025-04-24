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
        <div className="App">
            <Header />
            <main>
                <section id="hero" className="section"><Hero /></section>
                <section id="about" className="section"><About /></section>
                <section id="skills" className="section"><Skills /></section>
                <section id="projects" className="section"><Projects /></section>
                <section id="experience" className="section"><Experience /></section>
                <section id="contact" className="section"><Contact /></section>
            </main>
            <Footer />
        </div>
    );
}

export default App;