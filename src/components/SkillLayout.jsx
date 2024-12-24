import React, { useState } from "react";
import SkillBox from "./SkillBox";
import SkillDetails from "./SkillDetails";
import useGsapAnimations from "./useGsapAnimations";


const SkillLayout = () => {

  useGsapAnimations(".fade-in-slide-left", "fadeInSlideLeft");
  useGsapAnimations(".fade-in-slide-right", "fadeInSlideright");

  const [activeSkill, setActiveSkill] = useState("Frontend");

  const skillsData = {
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Backend: ["Node.js", "Express", "MongoDB"],
    Tools: ["Git & GitHub", "Visual Studio Code", "Responsive Design"],
    "Soft Skills": ["Teamwork", "Communication", "Problem Solving"],
  };

  return (
    <div className="skill-layout ">
      {/* Left Section */}
      <div className="left-section fade-in-slide-left">
        
        {Object.keys(skillsData).map((skill) => (
          <SkillBox
            key={skill}
            skill={skill}
            isActive={activeSkill === skill}
            onClick={() => setActiveSkill(skill)}
             className="skill-box"
          />
        ))}
      </div>
    

      {/* Right Section */}
      <div className="right-section fade-in-slide-right">
        <SkillDetails title={activeSkill} details={skillsData[activeSkill]} />
      </div>
    </div>
  );
};

export default SkillLayout;
