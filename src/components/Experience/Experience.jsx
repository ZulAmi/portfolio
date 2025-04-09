import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'Tech Company A',
            duration: 'Jan 2020 - Present',
            description: 'Developed and maintained user interfaces for web applications using React and Redux.'
        },
        {
            title: 'Web Developer Intern',
            company: 'Startup B',
            duration: 'Jun 2019 - Dec 2019',
            description: 'Assisted in the development of responsive websites and web applications.'
        },
        {
            title: 'Freelance Developer',
            company: 'Self-Employed',
            duration: 'Jan 2018 - May 2019',
            description: 'Worked on various freelance projects, focusing on frontend development and UI/UX design.'
        }
    ];

    return (
        <section className="experience" id="experience">
            <h2>Experience</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3>{exp.title}</h3>
                        <p>{exp.company} | {exp.duration}</p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;