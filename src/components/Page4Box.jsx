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
};

export default Page4Box;
