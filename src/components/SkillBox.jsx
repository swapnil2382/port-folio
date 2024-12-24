import React from "react";


const SkillBox = ({ skill, isActive, onClick }) => {
  return (
    <div
      className={`skill-box ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <p>{skill}</p>
    </div>
  );
};

export default SkillBox;
