import React from "react";
import useGsapAnimations from "../components/useGsapAnimations";
import ExperienceSection from "../components/ExperienceSection";
import '../styles/Page1.css';

const Page5 = () => {
  useGsapAnimations();

  return (
    <div id="page5" className="min-h-screen flex flex-col justify-start relative z-10 pt-5 bg-gradient-to-t from-black to-gray-900 text-white">
  
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-300 text-center gsap-animate">
  &lt;/ Experience &gt;
</h1>

      <p className="text-center text-gray-400 text-sm md:text-base max-w-3xl mx-auto mt-4 px-4 gsap-animate">
        "Experience is not just about the past; it's about learning, growing, and shaping the future. 
        From internships to certifications, every step matters in the journey of a developer."
      </p>

      <ExperienceSection/>
    </div>
  );
};

export default Page5;
