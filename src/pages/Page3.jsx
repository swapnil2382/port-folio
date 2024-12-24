import React from "react";
import useGsapAnimations from "../components/useGsapAnimations";
import '../styles/Page1.css';
import SkillLayout from "../components/SkillLayout";

const Page3 = () => {
  // Apply GSAP animations to elements with the 'animate-on-scroll' class
  useGsapAnimations(".fade-in-slide-left", "fadeInSlideLeft");
  useGsapAnimations(".animate-on-scroll");
  

  // Skill logos data (example, update with your own logo images)
  const skillLogos = [
    { name: "MongoDB", image: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" },
    { name: "React", image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fe0nl7ziy1la7bpwj7rsp.png" },
    { name: "Node.js", image: "https://ih1.redbubble.net/image.404031065.2191/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" },
    { name: "Java", image: "https://www.cdnlogo.com/logos/j/86/java.svg" },
    { name: "Python", image: "https://www.shutterstock.com/image-vector/vector-illustration-icon-python-programming-260nw-1397241389.jpg" },
  ];

  return (
    <div className="flex flex-col justify-start relative z-10 bg-white overflow-hidden h-screen">
      <div className="bg-[url('https://img.freepik.com/free-vector/realistic-polygonal-background_52683-59998.jpg?semt=ais_hybrid')] bg-cover bg-center m-5 h1-screen rounded-3xl">
        <h1 id="personalh12" className="bounce-text text-[5vw] text-center font-extrabold italic pt-0 pb-0 text-white bounce-text animate-on-scroll pt-7">
          SKILLS
        </h1>
        <div className="flex-grow flex justify-center items-center">
          <div className="skill-layout-container">
            {/* New div for skill logos */}
            <div className="skill-logos-container fade-in-slide-left">
              {skillLogos.map((logo, index) => (
                <div
                  key={index}
                  className="skill-logo"
                  style={{ backgroundImage: `url(${logo.image})` }}
                ></div>
              ))}
            </div>

            {/* Skill Layout (90% width) */}
            <SkillLayout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
