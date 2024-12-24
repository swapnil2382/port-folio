import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import useGsapAnimations from "./useGsapAnimations";

const Page2img = () => {
  const imgRef = useRef(null); // Ref for the image element

  useGsapAnimations(".fade-in-slide-left", "fadeInSlideLeft");

  useEffect(() => {
    const imgElement = imgRef.current;

    const handleMouseMove = (e) => {
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
        duration: 0.3,
        ease: "power1.out",
      });
    };

    // Add event listeners for mouse move and mouse leave
    imgElement.addEventListener("mousemove", handleMouseMove);
    imgElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      imgElement.removeEventListener("mousemove", handleMouseMove);
      imgElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="page2img2" className="flex justify-center items-center fade-in-slide-left bg-transparent">
      <img
      id="page2img"
        ref={imgRef}
        src="public/images/swapnilprofilepic.jpg"
        alt="Profile Picture"
        className="rounded-md w-[25vw] h-[40vw]  object-cover"
      />
    </div>
  );
};

export default Page2img;
