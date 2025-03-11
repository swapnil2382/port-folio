<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import { FaUser, FaUniversity, FaBook, FaCalendarAlt } from "react-icons/fa"; // Importing some icons
import useGsapAnimations from "./useGsapAnimations"; // Adjust path as needed
import { gsap } from "gsap";

const Page2text = () => {
  // Create refs for each <li> item
  const liRefs = useRef([]);

  useGsapAnimations(".fade-in-slide-right", "fadeInSlideright");

  useEffect(() => {
    liRefs.current.forEach((liElement, index) => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = liElement.getBoundingClientRect(); // Get <li> position and size

        // Calculate the position of the cursor relative to the <li>
        const x = ((clientX - rect.left) / rect.width - 0.5) * 2; // Normalize to range [-1, 1]
        const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

        // Apply GSAP animation with different scale, rotation, and shadow
        gsap.to(liElement, {
          scale: 1.1,  // Slightly more pronounced scale effect
          x: x * 15,   // Increase the x-direction movement
          y: y * 15,   // Increase the y-direction movement
          rotation: -x * 5,  // Rotate in the opposite direction
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",  // Add subtle shadow
          duration: 0.3,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        // Reset the <li> to its original state
        gsap.to(liElement, {
          scale: 1,
          x: 0,
          y: 0,
          rotation: 0,
          boxShadow: "none",  // Remove shadow
          duration: 0.3,
          ease: "power1.out",
        });
      };

      // Add event listeners for mouse move and mouse leave
      liElement.addEventListener("mousemove", handleMouseMove);
      liElement.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup event listeners
      return () => {
        liElement.removeEventListener("mousemove", handleMouseMove);
        liElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row text-black text-sm p-4 bg-white shadow-lg rounded-lg max-w-3xl mx-auto h-full fade-in-slide-right ">
      <div id="page2text" className="flex-1">
        {/* Title Section */}
        <h1 className="text-[2vw] font-bold text-gray-800 mb-6 ">
          About Me
        </h1>

        {/* Introduction Text */}
        <p className="text-[1vw] mb-4 text-gray-700 leading-relaxed">
          Hi, I'm Swapnil, a curious and passionate 3rd-year Computer Engineering student with a love for technology and innovation. I thrive in solving complex problems and enjoy building intuitive and functional web applications. With a strong foundation in front-end development and an interest in AI and machine learning, I'm constantly seeking new opportunities to learn and grow.
          When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or experimenting with new frameworks and tools. I believe in the power of technology to create a better future and am driven to contribute to that vision.
          Let’s connect and explore the possibilities together!
        </p>

        {/* Info List with Icons */}
        <ul className="mt-4 space-y-3 text-sm leading-relaxed">
          <li
            ref={(el) => (liRefs.current[0] = el)}
            className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <FaUser id="page2texticon" className="text-blue-500 text-xl" />
            <span id="page2texttag" className="font-semibold text-gray-800">Name:</span>
            <span id="page2texttext" className="text-gray-700">Swapnil Prakash Patil</span>
          </li>

          <li
            ref={(el) => (liRefs.current[1] = el)}
            className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <FaUniversity className="text-green-500 text-xl" />
            <span className="font-semibold text-gray-800">College:</span>
            <span className="text-gray-700">Saraswati College of Engineering, Kharghar</span>
          </li>

          <li
            ref={(el) => (liRefs.current[2] = el)}
            className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <FaBook className="text-orange-500 text-xl" />
            <span className="font-semibold text-gray-800">Degree:</span>
            <span className="text-gray-700">Computer Engineering</span>
          </li>

          <li
            ref={(el) => (liRefs.current[3] = el)}
            className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <FaUniversity className="text-green-500 text-xl" />
            <span className="font-semibold text-gray-800">University:</span>
            <span className="text-gray-700">Mumbai University</span>
          </li>

          <li
            ref={(el) => (liRefs.current[4] = el)}
            className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <FaCalendarAlt className="text-purple-500 text-xl" />
            <span className="font-semibold text-gray-800">Expected Graduation:</span>
            <span className="text-gray-700">2026</span>
          </li>

          <li
            ref={(el) => (liRefs.current[5] = el)}
            className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <FaBook className="text-orange-500 text-xl" />
            <span className="font-semibold text-gray-800">Relevant Coursework:</span>
            <span className="text-gray-700">Data Structures, Algorithms, Web Development, Database Systems</span>
          </li>
=======
import React, { useState } from "react";
import { FaUser, FaUniversity, FaBook, FaCalendarAlt } from "react-icons/fa";

const Page2text = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const infoList = [
    { icon: <FaUser className="text-blue-500 text-xl" />, label: "Name", value: "Swapnil Prakash Patil" },
    { icon: <FaUniversity className="text-green-500 text-xl" />, label: "College", value: "Saraswati College of Engineering, Kharghar" },
    { icon: <FaBook className="text-orange-500 text-xl" />, label: "Degree", value: "Computer Engineering" },
    { icon: <FaUniversity className="text-green-500 text-xl" />, label: "University", value: "Mumbai University" },
    { icon: <FaCalendarAlt className="text-purple-500 text-xl" />, label: "Expected Graduation", value: "2026" },
    { icon: <FaBook className="text-orange-500 text-xl" />, label: "Coursework", value: "Data Structures, Algorithms, Web Development, Database Systems" },
  ];

  return (
    <div className="text-black p-6 w-full">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">About Me</h2>

      {/* Intro for Mobile View */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center md:text-left">
        Hi, I'm Swapnil, a 3rd-year Computer Engineering student passionate about web development, AI, and problem-solving. 
      </p>

      {/* Accordion (Mobile View) */}
      <div className="md:hidden">
        {infoList.map((item, index) => (
          <div key={index} className="mb-3 border border-gray-300 rounded-lg overflow-hidden max-w-[500px]">
            <button
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="font-semibold text-gray-800">{item.label}</span>
              </div>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 bg-white text-gray-700">{item.value}</div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View (Normal List) */}
      <div className="hidden md:block">
        <ul className="space-y-4 text-lg">
          {infoList.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              {item.icon}
              <span className="font-semibold text-gray-800">{item.label}:</span>
              <span className="text-gray-700">{item.value}</span>
            </li>
          ))}
>>>>>>> 160203e (Updated portfolio with new design)
        </ul>
      </div>
    </div>
  );
};

export default Page2text;
