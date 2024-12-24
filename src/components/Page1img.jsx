import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/Page1.css'; // Ensure you have the correct path to your CSS file

const Page1img = () => {
  useEffect(() => {
    // GSAP floating animation
    gsap.to('.img-small', {
      y: -30, // Move the image up
      repeat: -1, // Infinite repeat
      yoyo: true, // Reverse animation after each iteration
      duration: 1, // Duration for each float cycle
      ease: 'power1.inOut', // Smooth easing
    });
  }, []);

  return (
    <div id='page1img' className="flex justify-center mt-10 sm:mt-0">
      <img
        src="https://static.vecteezy.com/system/resources/previews/035/138/455/non_2x/ai-generated-people-communicate-free-png.png"
        alt="Floating Image"
        className="img-small rounded-full"
      />
    </div>
  );
};

export default Page1img;
