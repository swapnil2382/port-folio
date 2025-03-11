import React from "react";

const Page4Model = ({ project, onClose }) => {
  return (
<<<<<<< HEAD
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-[9999] pointer-events-auto"
      style={{ backdropFilter: "blur(5px)" }} // Optional: Adds a blur effect
    >
      <div className="bg-gray-900 p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 text-white relative z-[10000]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-red-500 text-xl font-bold"
=======
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] px-4">
      <div className="bg-gray-800 p-5 rounded-lg w-full max-w-md text-white relative shadow-lg">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white px-2 py-1 rounded-full hover:bg-gray-600 transition"
>>>>>>> 160203e (Updated portfolio with new design)
        >
          ✖
        </button>

        {/* Modal Content */}
<<<<<<< HEAD
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
=======
        <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
        
        {/* Smaller Image */}
        <div className="flex justify-center">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-32 h-32 object-cover rounded-md mb-3"
          />
        </div>

        <p className="text-sm text-gray-300">{project.description}</p>
        <div className="mt-3 text-sm space-y-1">
          <p><strong>Created:</strong> {project.created}</p>
          <p><strong>Technologies:</strong> {project.technologies}</p>
          <p><strong>Role:</strong> {project.role}</p>
        </div>

        {/* GitHub Update Notice */}
        <p className="mt-4 text-xs text-gray-400 italic">
          🔹 This project has been updated on GitHub. You can visit there to check the latest changes.
        </p>
>>>>>>> 160203e (Updated portfolio with new design)
      </div>
    </div>
  );
};

export default Page4Model;
