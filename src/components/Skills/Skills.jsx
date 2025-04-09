import React from 'react';
import skillsData from '../../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2>My Skills</h2>
            <ul>
                {skillsData.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill.name}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;