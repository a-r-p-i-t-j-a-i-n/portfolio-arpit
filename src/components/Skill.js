import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs,  faEnvira, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'; // Importing faNode for Next.js
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Importing faDatabase for REST API or database icon

import './Skill.css'; // Import CSS file for styling

const skills = [
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'REST API', icon: faDatabase }, // Using faDatabase icon for REST API or database
  { name: 'MongoDB', icon: faEnvira }, // You can choose a different MongoDB icon if available
  { name: 'Redux', icon: faReact }, // Assuming Redux icon is same as React
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
];

const Skill = () => {
  return (
    <>
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-icon-container">
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            </div>
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
   
    </>
  );
}

export default Skill;
