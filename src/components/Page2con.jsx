import React from "react";
import Page2img from "./Page2img";

import useGsapAnimations from "../components/useGsapAnimations";
import Page2text from "./Page2text";

const Page2con = () => {
  useGsapAnimations(".fade-in-slide-left", "fadeInSlideLeft");
  useGsapAnimations(".animate-on-scroll");
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-white shadow-lg rounded-lg p-6">
      {/* Left Side - Enlarged Image (30%) */}
      <div className="w-full lg:w-[30%] flex-shrink-0 fade-in-slide-left">
        <Page2img />
      </div>

      {/* Right Side - Information (70%) */}
      <div className="w-full lg:w-[70%] fadeInSlideLeft">

        <Page2text />
      </div>
    </div>
  );
};

export default Page2con;
