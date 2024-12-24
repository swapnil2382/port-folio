import React from "react";
import useGsapAnimations from "../components/useGsapAnimations";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";


const Page6 = () => {
  // Apply GSAP animations to elements with the 'animate-on-scroll' class
  useGsapAnimations(".animate-on-scroll");


  return (
    <div className="min-h-screen flex flex-col justify-start relative z-10 pt-[10px]">
      {/* Heading at the Top */}
      <h1 id="personalh15" className="gradient-text text-[5vw] text-center font-extrabold italic pt-0 pb-0 text-black bounce-text animate-on-scroll ">
        CONTACT
      </h1>
<ContactPage/>
  <Footer/>
     
    </div>

  );
};

export default Page6;
