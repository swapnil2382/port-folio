import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Page1foot = () => {
  useEffect(() => {
    // GSAP animation for continuous rotation
    gsap.to('.rotate-animation', {
      rotation: '+=360', // Increment the rotation value by 360 degrees
      duration: 2, // Duration of 2 seconds for one full rotation
      repeat: -1, // Infinite loop
      ease: 'linear', // Smooth rotation
    });
  }, []);

  return (
    <div
    id='page1foot'
      className="w-full flex justify-start items-center pl-[13rem] pt-[25rem] gap-[1rem]"
    >
      <img
      id='page1footimg'
        className="w-20 h-20 rounded-full border-2 rotate-animation"
        src="https://codeclub.co.in/code_logo.png"
        alt="Logo 1"
      />
      <img
      id='page1footimg'
        className="w-20 h-20 rounded-full border-2 rotate-animation"
        src="https://img.freepik.com/premium-photo/logo-web-design-is-shown-black-background_939033-77910.jpg"
        alt="Logo 2"
      />
      <img
      id='page1footimg'
        className="w-20 h-20 rounded-full border-2 rotate-animation"
        src="https://static.vecteezy.com/system/resources/thumbnails/007/619/674/small_2x/modern-hexagon-tech-logo-designs-concept-hexa-technology-logo-template-vector.jpg"
        alt="Logo 3"
      />
    </div>
  );
};

export default Page1foot;

