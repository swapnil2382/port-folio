import React, { useRef } from 'react';
import Page1foot from '../components/Page1foot';
import Homecon from '../components/Homecon';
import '../styles/Page1.css';
import Headerlogo from '../components/Headerlogo';
import { gsap } from 'gsap';

const Page1 = () => {
  const tiltref = useRef(null);

  const handleMouseMove = (e) => {
    if (tiltref.current) {
      const rect = tiltref.current.getBoundingClientRect();
      const centerX = rect.x + rect.width / 2; // Center X of the div
      const centerY = rect.y + rect.height / 2; // Center Y of the div

      const xVal = (e.clientX - centerX) / 30; // Calculate rotation X
      const yVal = -(e.clientY - centerY) / 10; // Calculate rotation Y

      // Use GSAP to update the transform
      gsap.to(tiltref.current, {
        rotationX: yVal,
        rotationY: xVal,
        transformPerspective: 1000, // Add depth for 3D effect
        duration: 0.2, // Smooth animation
        ease: 'power2.out', // Optional easing for smoothness
      });
    }
  };

  return (
    <div
      id='MainId'
      onMouseMove={handleMouseMove} // Attach the GSAP mouse move handler
      className="h-screen relative"
    >
      <div className=" page h-screen p-5"> {/* Add padding */}
        <div
          className="sparkle h-full shadow-2xl bg-[url('https://media.istockphoto.com/id/536507269/photo/night-sky-with-bright-stars-and-blue-nebula.jpg?s=612x612&w=0&k=20&c=GyiSGEZ-zAD7SHrhTrlpanoCVpIH2MhLjVHXJ8huWC4=')] bg-cover bg-center rounded-3xl w-full"
        >
          <Headerlogo />
          <Homecon tiltref={tiltref} /> {/* Pass tiltref to Homecon */}
          <Page1foot />
        </div>
      </div>
    </div>
  );
};

export default Page1;
