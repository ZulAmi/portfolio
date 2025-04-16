import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaChevronRight } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'Tech Company A',
            duration: 'Jan 2020 - Present',
            description: 'Developed and maintained user interfaces for web applications using React and Redux.',
            skills: ['React', 'Redux', 'TypeScript', 'Material UI'],
            icon: 'briefcase',
            color: '#3b82f6' // primary blue color
        },
        {
            title: 'Web Developer Intern',
            company: 'Startup B',
            duration: 'Jun 2019 - Dec 2019',
            description: 'Assisted in the development of responsive websites and web applications.',
            skills: ['JavaScript', 'HTML/CSS', 'Bootstrap'],
            icon: 'code',
            color: '#10b981' // secondary green color
        },
        {
            title: 'Freelance Developer',
            company: 'Self-Employed',
            duration: 'Jan 2018 - May 2019',
            description: 'Worked on various freelance projects, focusing on frontend development and UI/UX design.',
            skills: ['WordPress', 'jQuery', 'Figma'],
            icon: 'graduation',
            color: '#8b5cf6' // accent purple color
        }
    ];

    return (
        <section id="experience">
            <div className="experience-container">
                <div className="experience-header">
                    <span className="experience-section-title">Career Path</span>
                    <h2 className="experience-title">
                        Professional Journey
                        <div className="experience-title-underline"></div>
                    </h2>
                    <p className="experience-subtitle">
                        My career progression and professional accomplishments
                    </p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-track"></div>

                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div
                                className="timeline-node"
                                style={{ borderColor: exp.color }}
                            >
                                {exp.icon === 'briefcase' && <FaBriefcase />}
                                {exp.icon === 'code' && <FaCode />}
                                {exp.icon === 'graduation' && <FaGraduationCap />}
                            </div>

                            <div className="timeline-content">
                                <div className="experience-card">
                                    <div className="card-header">
                                        <div className="job-title-container">
                                            <h3 className="job-title">{exp.title}</h3>
                                            <div className="company-badge">{exp.company}</div>
                                        </div>
                                        <div className="duration-badge">{exp.duration}</div>
                                    </div>

                                    <p className="job-description">{exp.description}</p>

                                    <div className="skills-container">
                                        <div className="skills-header">
                                            <FaChevronRight className="skills-icon" />
                                            <span>Key Technologies</span>
                                        </div>
                                        <div className="skills-list">
                                            {exp.skills.map((skill, idx) => (
                                                <span className="skill-tag" key={idx} style={{ backgroundColor: `${exp.color}20`, borderColor: `${exp.color}50` }}>{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;