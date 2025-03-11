import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import swapnilProfilePic from "./swapnilprofilepic.jpg";

const Page2img = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    const handleMouseMove = (e) => {
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
        duration: 0.3,
        ease: "power1.out",
      });
    };

    imgElement.addEventListener("mousemove", handleMouseMove);
    imgElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imgElement.removeEventListener("mousemove", handleMouseMove);
      imgElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full h-[50vw] lg:h-[30vw] rounded-2xl overflow-hidden shadow-lg">
      <img
        ref={imgRef}
        src={swapnilProfilePic}
        alt="Profile"
        className="w-full h-full object-cover rounded-2xl transition-transform duration-300"
      />
    </div>
  );
};

export default Page2img;
