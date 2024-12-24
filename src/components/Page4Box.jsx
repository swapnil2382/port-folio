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
};

export default Page4Box;
