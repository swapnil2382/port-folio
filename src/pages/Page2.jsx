import React from "react";
import useGsapAnimations from "../components/useGsapAnimations";
import Page2con from "../components/Page2con";

const Page2 = () => {
<<<<<<< HEAD
  // Apply GSAP animations to elements with the 'animate-on-scroll' class
  useGsapAnimations(".animate-on-scroll");


  return (
    <div className="min-h-screen flex flex-col justify-start relative z-10 pt-[0px]">
      {/* Heading at the Top */}
      <h1 id="personalh11" className="PersonalH1 gradient-text text-[5vw] text-center font-extrabold italic pt-0 pb-0 text-black bounce-text animate-on-scroll ">
        PERSONAL INFORMATION
      </h1>


      {/* Content */}
      <div className="flex-grow flex justify-center items-center bg-white">
        <Page2con />
      </div>
    </div>

=======
  useGsapAnimations(".fade-in-slide-left", "fadeInSlideLeft");
  useGsapAnimations(".animate-on-scroll");

  return (
    <div className=" bg-white flex flex-col justify-center items-center">
      {/* Heading */}
       <h1 id="personalh11" className="bounce-text text-[5vw] text-center font-extrabold italic pt-0 pb-0 text-black bounce-text animate-on-scroll pt-7">
         PERSONAL INFORMATION
        </h1>

      {/* Wider Content Container - 80% Width */}
      <div className="w-[90vw] px-6 animate-on-scroll">
        <Page2con />
      </div>
    </div>
>>>>>>> 160203e (Updated portfolio with new design)
  );
};

export default Page2;
