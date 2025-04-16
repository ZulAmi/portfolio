import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App compact-theme">
            <Header />
            <main className="compact-layout">
                <Hero />
                <div className="two-column-section">
                    <About />
                    <Skills />
                </div>
                <div className="full-width-section">
                    <Projects />
                </div>
                <div className="two-column-section reverse">
                    <Contact />
                    <Experience />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;