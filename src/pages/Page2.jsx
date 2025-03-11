import React from "react";
import useGsapAnimations from "../components/useGsapAnimations";
import Page2con from "../components/Page2con";

const Page2 = () => {
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
  );
};

export default Page2;
