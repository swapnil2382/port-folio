import React from "react";
import useGsapAnimations from "../components/useGsapAnimations";
import ExperienceSection from "../components/ExperienceSection";
import '../styles/Page1.css';

const Page5 = () => {
  // Apply GSAP animations to elements with the 'animate-on-scroll' class
  useGsapAnimations(".animate-on-scroll");


  return (
    <div className="min-h-screen flex flex-col justify-start relative z-10 pt-[0px]">
      {/* Heading at the Top */}
      <h1 id="personalh14" className="gradient-text text-[5vw] text-center font-extrabold italic pt-0 pb-0 text-black bounce-text animate-on-scroll ">
       WORK EXPERIENCE
      </h1>

     <ExperienceSection/>
    
    </div>

  );
};

export default Page5;
