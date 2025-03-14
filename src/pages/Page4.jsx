import React, { useState } from "react";
import useGsapAnimations from "../components/useGsapAnimations";

const projects = [
  {
    title: "Disaster Relief Management System",
    image: "https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-natural-disaster-vector-png-image_6877903.png",
    description: "A centralized platform to coordinate disaster relief efforts, ensuring faster response and resource distribution.",
    features: ["Real-time disaster tracking", "Volunteer registration", "Resource allocation"],
    technologies: "React, Node.js, PostgreSQL",
    role: "Backend Developer",
    link: "https://github.com/swapnil2382",
  },
  {
    title: "Parent-Teacher Portal",
    image: "https://cdni.iconscout.com/illustration/premium/thumb/online-education-illustration-download-in-svg-png-gif-file-formats--e-book-learning-gradient-pack-business-illustrations-2488466.png?f=webp",
    description: "A digital platform that bridges the gap between parents and teachers, allowing seamless communication and performance tracking.",
    features: ["Live student progress tracking", "Direct messaging", "Report card automation"],
    technologies: "React, Firebase, Express.js",
    role: "Full Stack Developer",
    link: "https://github.com/swapnil2382",
  },
  {
    title: "Complaint Management System",
    image: "https://alisonstech.com/wordpress/wp-content/uploads/2022/09/complaints-management-food-beverage.png",
    description: "A platform designed to streamline complaint filing and management, providing seamless tracking and resolution features.",
    features: ["Real-time complaint tracking", "Automated email notifications", "Role-based user access"],
    technologies: "React, Node.js, MongoDB",
    role: "Full Stack Developer",
    link: "https://github.com/swapnil2382",
  },
  {
    title: "Movie Ticket Booking",
    image: "https://media.excellentwebworld.com/wp-content/uploads/2021/01/16121416/online-movie-ticket-booking-app_development.png",
    description: "A seamless movie ticket booking platform with real-time seat selection and payment integration.",
    features: ["Live seat selection", "Secure online payments", "Multi-cinema support"],
    technologies: "Python, Django, SQLite",
    role: "Backend Developer",
    link: "https://github.com/swapnil2382",
  },
  {
    title: "Frontend Templates",
    image: "https://apaengineering.com/wp-content/uploads/2022/11/ui-banner-desktop1.png",
    description: "A collection of modern, responsive frontend templates for various applications.",
    features: ["Fully responsive designs", "Easy customization", "Dark & light themes available"],
    technologies: "HTML, CSS, JavaScript, Bootstrap",
    role: "UI/UX Designer",
    link: "https://github.com/swapnil2382",
  },
  {
    title: "Cultural Heritage (SANSKRITI)",
    image: "https://purepng.com/public/uploads/large/india-gxl.png",
    description: "An educational platform highlighting India's cultural richness.",
    features: ["Interactive cultural map", "Historical timelines", "User-submitted heritage stories"],
    technologies: "HTML, CSS, JavaScript, MongoDB",
    role: "Web Developer",
    link: "https://github.com/swapnil2382",
  },
];


const ProjectCard = ({ project }) => {
  return (
    <div id="page4" className="w-full lg:w-[900px] bg-gray-900 text-yellow-500 rounded-xl overflow-hidden shadow-lg transition-all transform hover:scale-105 border border-gray-600 flex flex-col lg:flex-row p-6 mb-6 gsap-animate-desktop">

      <div className="lg:w-[45%] w-full flex justify-center items-center">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-[280px] object-cover rounded-lg"
        />
      </div>


      <div className="lg:w-[55%] w-full flex flex-col justify-between min-h-[280px] p-6">
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-gray-400 text-sm mt-2">{project.description}</p>

          <ul className="mt-3 text-gray-400 text-sm list-disc pl-5">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>


        <div>
          <p className="text-gray-500 text-xs mt-3"><strong>Tech:</strong> {project.technologies}</p>
          <p className="text-gray-500 text-xs"><strong>Role:</strong> {project.role}</p>

    
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm transition-all"
          >
            View →
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [showAll, setShowAll] = useState(false);
  useGsapAnimations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center py-12 px-5">
    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-purple-500 text-center gsap-animate">
  &lt;/ Projects &gt;
</h1>


<p className="text-center text-gray-400 text-sm md:text-base max-w-3xl mx-auto mt-4 px-4 mb-10 gsap-animate">
  "Projects are more than just code; they are the stories of creativity, challenges, and innovation.  
  Each project is a step forward, turning ideas into reality."
</p>


      {projects.slice(0, showAll ? projects.length : 2).map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}


      {!showAll && (
      <button
      onClick={() => setShowAll(true)}
      className="mt-6 px-6 py-3 text-lg rounded-lg transition-all 
                 relative overflow-hidden bg-transparent text-white 
                 hover:text-gray-500 backdrop-blur-md moving-text gsap-animate"
    >
      See More ↓
    </button>
    
      )}
    </div>
  );
};

export default ProjectsPage;
