import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <h2>About Me</h2>
            <p>
                I am a passionate frontend developer with experience in building responsive and user-friendly web applications.
                My skills include HTML, CSS, JavaScript, and React. I enjoy turning complex problems into simple, beautiful,
                and intuitive designs. I am constantly learning and keeping up with the latest trends in web development.
            </p>
            <h3>Skills</h3>
            <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Responsive Design</li>
                <li>Version Control (Git)</li>
            </ul>
            <h3>Experience</h3>
            <p>
                I have worked on various projects, collaborating with teams to deliver high-quality software solutions.
                My experience includes both freelance projects and contributions to open-source initiatives.
            </p>
        </section>
    );
};

export default About;