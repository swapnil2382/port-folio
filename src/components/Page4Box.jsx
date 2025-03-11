<<<<<<< HEAD
import React, { useState } from "react";
import '../styles/Page1.css';
import useGsapAnimations from "./useGsapAnimations";

const Page4Box = ({ projects, onOpenModal }) => {

    useGsapAnimations(".animate-on-scroll");

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next project
    const nextProjects = () => {
        if (currentIndex + 1 < projects.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Function to move to the previous project
    const prevProjects = () => {
        if (currentIndex - 1 >= 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Determine the projects to display based on screen size
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed
    const currentProjects = isMobile
        ? projects.slice(currentIndex, currentIndex + 1) // One project for mobile
        : projects.slice(currentIndex, currentIndex + 3); // Three projects for desktop

    return (
        <div id="page4-container" className="relative w-full h-[70vh] flex justify-center items-center overflow-hidden animate-on-scroll">
            {/* Left Arrow */}
            <button
                id="left-arrow"
                className="p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10"
                onClick={prevProjects}
                disabled={currentIndex === 0}
            >
                &#8592;
            </button>

            <div id="projects-wrapper" className="relative flex justify-center items-center w-full h-full overflow-hidden">
                <div id="projects-list" className="flex">
                    {currentProjects.map((project, index) => (
                        <div
                            id={`project-box`}
                            key={index}
                            className="flex-none w-[450px] h-[550px] p-4"
                            onClick={() => onOpenModal(project)}
                        >
                            <div id={`project-inner`} className="rounded-[30px] shadow-lg h-full flex flex-col bg-gray-900 border-2 ">
                                {/* Image */}
                                <div id={`image-container`} className="Page4img h-full m-5 rounded-[20px] overflow-hidden">
                                    <img
                                        id={`project-image`}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div id={`text-container`} className="Page4text h-full bg-gray-600 m-5 rounded-[20px] p-5">
                                    {/* Project Title */}
                                    <h2 id={`project-title`} className="text-lg font-bold text-white px-2 m-0 mb-2">
                                        {project.title}
                                    </h2>
                                    {/* Project Description */}
                                    <p id={`project-desc`} className="text-sm text-white px-2 m-0 mb-5">
                                        {project.desc}
                                    </p>
                                    {/* Demo Button */}
                                    <div id={`demo-button`} className="text-sm text-gray-700 px-2 pb-2 mt-2">
                                        <button id={`details-button`} className="bg-gray-600 text-white rounded-md p-2 hover:bg-gray-700 transition-all duration-300">
                                            Details →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <button
                id="right-arrow"
                className="p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10"
                onClick={nextProjects}
                disabled={currentIndex + (isMobile ? 1 : 3) >= projects.length}
            >
                &#8594;
            </button>
        </div>
    );
=======
import React, { useRef } from "react";

const ComingSoon = () => {
  return (
    <div className="relative flex-none w-full max-w-[340px] min-h-[480px] rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-md p-6 border border-gray-700 flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold text-white mb-2">🚀 Coming Soon</h2>
      <p className="text-gray-400 text-center text-sm">Exciting projects are on the way! Stay tuned for updates.</p>
    </div>
  );
};

const Page4Box = ({ projects, onOpenModal }) => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Scroll Indicator */}
      <p className="text-gray-400 text-sm mb-4 animate-pulse">Scroll → to explore</p>

      {/* Sliding Cards Container */}
      <div
      ref={scrollContainerRef}
      className="relative flex space-x-6 overflow-x-auto custom-scroll w-full px-4 py-6 snap-x snap-mandatory"
      style={{
        WebkitOverflowScrolling: "touch", // Smooth scrolling on mobile
      }}
    >
    <style jsx>{`
  /* Hide Scrollbar for Webkit Browsers (Chrome, Safari) */
  .custom-scroll::-webkit-scrollbar {
    display: none;
  }

  /* Hide Scrollbar for Firefox */
  .custom-scroll {
    scrollbar-width: none;
    -ms-overflow-style: none; /* IE/Edge */
  }
`}</style>

    
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex-none w-full max-w-[340px] min-h-[480px] rounded-2xl overflow-hidden transform transition-all hover:scale-105 cursor-pointer flex flex-col items-center"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-md h-full"></div>

            {/* Inner Card */}
            <div className="relative w-full h-full p-4 flex flex-col items-center">
              {/* Image */}
              <div className="w-full h-[50%] bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" />
              </div>

              {/* Info & Button */}
              <div className="w-full flex-grow bg-gray-900 rounded-xl border border-gray-700 mt-2 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.created}</p>
                  <p className="text-gray-400 text-sm mt-1"><strong>Tech:</strong> {project.technologies}</p>
                  <p className="text-gray-400 text-sm"><strong>Role:</strong> {project.role}</p>
                </div>

                {/* Button at Bottom */}
                <div className="mt-auto pt-3">
                  <button
                    className="w-full bg-blue-600 text-white py-2 rounded-lg border border-blue-500 hover:bg-blue-700 transition-all"
                    onClick={() => onOpenModal(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* "Coming Soon" Card at the End */}
        <ComingSoon />
      </div>
    </div>
  );
>>>>>>> 160203e (Updated portfolio with new design)
};

export default Page4Box;
