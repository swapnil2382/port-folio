import React from "react";

const Page4Model = ({ project, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-[9999] pointer-events-auto"
      style={{ backdropFilter: "blur(5px)" }} // Optional: Adds a blur effect
    >
      <div className="bg-gray-900 p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 text-white relative z-[10000]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-red-500 text-xl font-bold"
        >
          ✖
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">
          Featured - {project.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-1/2 rounded-md"
          />
          <div>
            <p className="mb-4">{project.description}</p>
            <p className="mb-2">
              <strong>Created:</strong> {project.created}
            </p>
            <p className="mb-2">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p className="mb-2">
              <strong>Role:</strong> {project.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4Model;
