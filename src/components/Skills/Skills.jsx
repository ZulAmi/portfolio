import React, { useState } from 'react';
import './Skills.css';

const skillsData = {
    "Development": [
        { name: "React.js", level: "Advanced", years: 4, icon: "⚛️" },
        { name: "Next.js", level: "Advanced", years: 3, icon: "▲" },
        { name: "TypeScript", level: "Intermediate", years: 3, icon: "📘" },
        { name: "Node.js", level: "Advanced", years: 4, icon: "🟢" },
        { name: "GraphQL", level: "Intermediate", years: 2, icon: "◼️" },
        { name: "MongoDB", level: "Intermediate", years: 3, icon: "🍃" },
    ],
    "Design": [
        { name: "Figma", level: "Intermediate", years: 2, icon: "🎨" },
        { name: "Tailwind", level: "Advanced", years: 3, icon: "🌬️" },
        { name: "UI/UX", level: "Intermediate", years: 3, icon: "📱" },
        { name: "Animation", level: "Intermediate", years: 2, icon: "✨" },
    ],
    "DevOps": [
        { name: "Git", level: "Advanced", years: 5, icon: "📂" },
        { name: "AWS", level: "Intermediate", years: 2, icon: "☁️" },
        { name: "Docker", level: "Intermediate", years: 2, icon: "🐳" },
        { name: "CI/CD", level: "Intermediate", years: 3, icon: "🔄" },
    ]
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("Development");

    const getLevelColor = (level) => {
        switch (level) {
            case "Advanced": return "var(--primary)";
            case "Intermediate": return "var(--secondary)";
            default: return "var(--accent)";
        }
    };

    return (
        <section id="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <span className="skills-section-title">Expertise</span>
                    <h2 className="skills-title">
                        Technical Proficiency
                    </h2>
                    <div className="skills-title-underline"></div>
                    <p className="skills-description">
                        My technical toolkit combines front-end precision, back-end architecture,
                        and modern DevOps practices to deliver complete solutions.
                    </p>
                </div>

                <div className="skills-category-tabs">
                    {Object.keys(skillsData).map(category => (
                        <button
                            key={category}
                            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {skillsData[activeCategory].map((skill) => (
                        <div className="skill-card" key={skill.name}>
                            <div className="skill-icon" aria-label={skill.name}>{skill.icon}</div>
                            <div className="skill-details">
                                <div className="skill-title">{skill.name}</div>
                                <div className="skill-level" style={{ color: getLevelColor(skill.level) }}>
                                    {skill.level}
                                </div>
                                <div className="skill-years">{skill.years} years</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;