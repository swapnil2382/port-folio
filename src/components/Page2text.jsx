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
        </ul>
      </div>
    </div>
  );
};

export default Page2text;
