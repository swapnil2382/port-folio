import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
<<<<<<< HEAD
import useGsapAnimations from "./useGsapAnimations";
import swapnilProfilePic from "./swapnilprofilepic.jpg";

const Page2img = () => {
  const imgRef = useRef(null); // Ref for the image element

  useGsapAnimations(".fade-in-slide-left", "fadeInSlideLeft");
=======
import swapnilProfilePic from "./swapnilprofilepic.jpg";

const Page2img = () => {
  const imgRef = useRef(null);
>>>>>>> 160203e (Updated portfolio with new design)

  useEffect(() => {
    const imgElement = imgRef.current;

    const handleMouseMove = (e) => {
<<<<<<< HEAD
      const { clientX, clientY } = e; // Get mouse position
      const rect = imgElement.getBoundingClientRect(); // Get image position and size

      // Calculate the position of the cursor relative to the image
      const x = ((clientX - rect.left) / rect.width - 0.5) * 2; // Normalize to range [-1, 1]
      const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

      // Apply GSAP animation
      gsap.to(imgElement, {
        scale: 1.05, // Slight zoom effect
        x: x * 10, // Horizontal spread based on cursor position
        y: y * 10, // Vertical spread based on cursor position
        rotation: x * 2, // Slight rotation based on horizontal position
        duration: 0.3, // Smooth animation duration
        ease: "power1.out", // Easing for smoothness
      });
    };

    const handleMouseLeave = () => {
      // Reset the image to its original state
      gsap.to(imgElement, {
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
=======
      const { clientX, clientY } = e;
      const rect = imgElement.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

      gsap.to(imgElement, {
        scale: 1.05,
        x: x * 10,
        y: y * 10,
        rotation: x * 2,
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imgElement, {
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        boxShadow: "none",
>>>>>>> 160203e (Updated portfolio with new design)
        duration: 0.3,
        ease: "power1.out",
      });
    };

<<<<<<< HEAD
    // Add event listeners for mouse move and mouse leave
    imgElement.addEventListener("mousemove", handleMouseMove);
    imgElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
=======
    imgElement.addEventListener("mousemove", handleMouseMove);
    imgElement.addEventListener("mouseleave", handleMouseLeave);

>>>>>>> 160203e (Updated portfolio with new design)
    return () => {
      imgElement.removeEventListener("mousemove", handleMouseMove);
      imgElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div id="page2img2" className="flex justify-center items-center fade-in-slide-left bg-transparent">
      <img
      id="page2img"
        ref={imgRef}
        src={swapnilProfilePic} 
        alt="Profile Picture"
        className="rounded-md w-[25vw] h-[40vw]  object-cover"
=======
    <div className="w-full h-[50vw] lg:h-[30vw] rounded-2xl overflow-hidden shadow-lg">
      <img
        ref={imgRef}
        src={swapnilProfilePic}
        alt="Profile"
        className="w-full h-full object-cover rounded-2xl transition-transform duration-300"
>>>>>>> 160203e (Updated portfolio with new design)
      />
    </div>
  );
};

export default Page2img;
