import React from "react";

const SkillDetails = ({ title, details }) => {
  // Define progress levels for each skill
  const progressLevels = {
    HTML: 90,
    CSS: 85,
    JavaScript: 80,
    React: 75,
    "Node.js": 70,
    Express: 65,
    MongoDB: 60,
    "Git & GitHub": 85,
    "Visual Studio Code": 95,
    "Responsive Design": 90,
    Teamwork: 80,
    Communication: 85,
    "Problem Solving": 90,
  };

  return (
    <div className="skill-details">
      <h3>{title}</h3>
      <ul>
        {details.map((item, index) => (
          <li key={index}>
            {item}
            {/* Progress Bar */}
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressLevels[item] || 50}%` }} // Default to 50% if no level defined
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillDetails;
