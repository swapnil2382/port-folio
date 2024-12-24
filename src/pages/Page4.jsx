import React, { useState } from "react";
import useGsapAnimations from "../components/useGsapAnimations";
import Page4Box from "../components/Page4Box";
import Page4Model from "../components/Page4Model";
import '../styles/Page1.css';


const projects = [
  {
    title: "Complaint Management System",
    image: "https://www.improsys.in/images/complaint/complaint-management-software.webp",
    description: "Modern web design techniques and responsive layouts.",
    created: "29 Feb 2024",
    technologies: "React, node.js, MongoDB",
    role: "Frontend , Backend",
    desc: "A Complaint Management System is an online platform designed to streamline the process of filing and managing FIRs.",
  },
  {
    title: "Movie Ticket Booking",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHjPX-GKYEX9yXi4ySoXIjTKiX2xBMrfwbQ&s",
    description: "Mobile app landing design & development",
    created: "21 Dec 2023",
    technologies: "Python, Django, SQLite, HTML, CSS, JavaScript",
    role: "Frontend, Backend",
    desc: "Movie Ticket Booking allows you to reserve seats for films in advance, ensuring a hassle-free experience.",
  },
  {
    title: "Frontend Templates",
    image: "https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2020/07/webdeveloper-working-jpg.jpg",
    description: "Modern web design techniques and responsive layouts.",
    created: "From march 2023",
    technologies: "Html, CSS, JavaScript, Bootstrap",
    role: "Designer",
    desc: "I have created a variety of frontend templates that showcase my proficiency in web design.",
  },
  {
    title: "Cultural Heritage (SANSKRITI)",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240219131347/List-of-World-Heritage-Sites-in-India.webp",
    description: "Sprading Knowledge about culture of India",
    created: "12 oct 2024",
    technologies: "Html, CSS, Javascript, MongoDB",
    role: "Designer",
    desc: "Sanskriti is a vibrant cultural heritage site dedicated to celebrating and preserving India's rich traditions.",
  },
  {
    title: "Speed X",
    image: "https://img.freepik.com/free-vector/illustrated-taxi-app-concept_23-2148512171.jpg",
    description: "Mobile app landing design & app maintenance.",
    created: "10 Dec 2024",
    technologies: "React, Node.js, Express.js, MongoDB [MERN Stack]",
    role: "Full Stack",
    desc: "Spee X is a comprehensive online taxi booking application which amins for fast and securely transporting the passangers",
  },
  {
    title: "Medsync",
    image: "https://i.ytimg.com/vi/ydL3FU2g2Ck/maxresdefault.jpg",
    description: "A contibution to healthcare using technology",
    created: "20 Dec 2024",
    technologies: "Html, CSS, JavaScript",
    role: "Frontend",
    desc: "A well build website use for tracking health with a feature of cure for the Diseases and a special video calling facility with Dr's and a free consultations",
  },
];

const Page4 = () => {
    const [modalProject, setModalProject] = useState(null); // Modal state
    useGsapAnimations(".animate-on-scroll");
  
    const openModal = (project) => {
      setModalProject(project);
    };
  
    const closeModal = () => {
      setModalProject(null);
    };
  
    return (
      <div className="flex flex-col justify-start relative z-10 bg-white overflow-hidden h-screen">
        <div className="bg-[url('https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148902517.jpg')] bg-cover bg-center m-5 h1-screen rounded-3xl">
          <h1 id="personalh13" className="bounce-text text-[5vw] text-center font-extrabold italic pt-0 pb-0 text-white bounce-text animate-on-scroll pt-7">
            PROJECTS
          </h1>
  
          {/* Boxes Section */}
          <Page4Box projects={projects} onOpenModal={openModal} />
  
          {/* Modal */}
          {modalProject && <Page4Model project={modalProject} onClose={closeModal} />}
        </div>
      </div>
    );
  };
  
  export default Page4;