import React, { useState } from "react";
import useGsapAnimations from "../components/useGsapAnimations";
import Page4Box from "../components/Page4Box";
import Page4Model from "../components/Page4Model";

const projects = [
  {
    title: "Complaint Management System",
    image: "https://static.vecteezy.com/system/resources/previews/054/596/007/non_2x/key-strategies-for-effective-risk-management-vector.jpg",
    description: "A platform designed to streamline complaint filing and management, providing seamless tracking and resolution features.",
    created: "29 Feb 2024",
    technologies: "React, Node.js, MongoDB",
    role: "Full Stack Developer",
    desc: "Users can submit complaints, track progress, and receive automated updates. Admins have dashboards for complaint categorization and resolution monitoring."
  },
  {
    title: "Movie Ticket Booking",
    image: "https://images-platform.99static.com/-oYaDfVBRjDPkDsu8au1XiaGqAk=/0x261:1241x1502/500x500/top/smart/99designs-contests-attachments/72/72133/attachment_72133753",
    description: "A seamless movie ticket booking platform with real-time seat selection and payment integration.",
    created: "21 Dec 2023",
    technologies: "Python, Django, SQLite",
    role: "Backend Developer",
    desc: "Users can browse movies, select seats, and complete transactions securely. The system includes ticket QR codes and refund policies."
  },
  {
    title: "Frontend Templates",
    image: "https://elements-resized.envatousercontent.com/elements-cover-images/3341f5cb-bd0f-4c41-a7ca-909c397d2b85?w=433&cf_fit=scale-down&q=85&format=auto&s=83b1efdc6f7d35c1eb2b88e6a8a9f129c39c26af1cbccb5d7f44ed2117488882",
    description: "A collection of modern, responsive frontend templates for various applications.",
    created: "March 2023",
    technologies: "HTML, CSS, JavaScript, Bootstrap",
    role: "UI/UX Designer",
    desc: "Templates include landing pages, dashboards, and e-commerce interfaces, designed for optimal user experience and performance."
  },
  {
    title: "Cultural Heritage (SANSKRITI)",
    image: "https://img.freepik.com/premium-photo/tourism-with-white-background-high-quality-ultra-hd_889056-5519.jpg",
    description: "An educational platform highlighting India's cultural richness.",
    created: "12 Oct 2024",
    technologies: "HTML, CSS, JavaScript, MongoDB",
    role: "Web Developer",
    desc: "Features include an interactive map, historical timelines, and user-submitted heritage stories, promoting cultural awareness."
  },
  {
    title: "Parent-Teacher Portal",
    image: "https://img.freepik.com/premium-vector/child-care-school-logo-design_779965-108.jpg?semt=ais_hybrid",
    description: "A digital platform that bridges the gap between parents and teachers, allowing seamless communication and performance tracking.",
    created: "Hackathon Project - 2024",
    technologies: "React, Firebase, Express.js",
    role: "Full Stack Developer",
    desc: "Parents can monitor student progress, receive reports, and interact with teachers through chat and video calls. Teachers can assign tasks, track attendance, and provide feedback."
  },
  {
    title: "Disaster Relief Management System",
    image: "https://images-platform.99static.com/L2QgE5sy_j_sv5xbpoik9jHHdL8=/500x500/top/smart/99designs-contests-attachments/12/12841/attachment_12841638",
    description: "A centralized platform to coordinate disaster relief efforts, ensuring faster response and resource distribution.",
    created: "Hackathon Project - 2024",
    technologies: "React, Node.js, PostgreSQL",
    role: "Backend Developer",
    desc: "Provides real-time disaster tracking, volunteer registration, and resource allocation features. Organizations and volunteers can collaborate to streamline aid distribution."
  }
];


const Page4 = () => {
  const [modalProject, setModalProject] = useState(null);
  useGsapAnimations(".animate-on-scroll");

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-10 overflow-hidden border m-5 h1-screen rounded-3xl" 
    style={{
      backgroundImage: "url('https://i.pinimg.com/736x/ea/3e/2f/ea3e2f737d4c95b5628f414c2ed3af83.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      
      <h1 className="text-[5vw] text-center font-extrabold italic text-white animate-on-scroll bounce-text">
          PROJECTS
        </h1>
      {/* Main Glassmorphism Container */}
      <div className="relative z-10  
                      w-[96vw] p-10 flex flex-col items-center">

        {/* Project Sliding Cards */}
        <Page4Box projects={projects} onOpenModal={openModal} />

        {/* Modal */}
        {modalProject && <Page4Model project={modalProject} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Page4;


