import React from "react";

const Page4Model = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] px-4">
      <div className="bg-gray-800 p-5 rounded-lg w-full max-w-md text-white relative shadow-lg">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white px-2 py-1 rounded-full hover:bg-gray-600 transition"
        >
          ✖
        </button>

        {/* Modal Content */}
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
      </div>
    </div>
  );
};

export default Page4Model;
