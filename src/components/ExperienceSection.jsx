import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccentureCert from "../components/Accenture Certificate.pdf";
import AWSCert from "../components/AWS certificate.pdf";
import LinkdinCert from "../components/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf";
import GoldmanCert from "../components/Goladsmash Certificate.pdf";
import { FaReact, FaAws, FaJava, FaDatabase, FaUserShield } from "react-icons/fa";
import useGsapAnimations from "../components/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    const [selectedTab, setSelectedTab] = useState("Certificates");
    const [popupData, setPopupData] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");

        elements.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, [selectedTab]);

    const experiences = [
        { title: "Full Stack Developer", period: "Rainy 2023", company: "Prodigy InfoTech", description: "Developed web applications using React, Node.js, and MongoDB.", icon: <FaReact size={50} className="text-blue-400" /> },
        { title: "Front-End Developer Intern", period: "Winter 2023", company: "Octanet", description: "Created interactive UI components and optimized performance.", icon: <FaReact size={50} className="text-cyan-400" /> },
    ];

    const certificates = [
        {
            title: "Data Analysis Certification",
            issuer: "Accenture",
            description: "Data cleaning, modeling, and visualization.",
            pdf: AccentureCert,
            icon: <FaDatabase size={50} className="text-yellow-400" />
        },
        {
            title: "AWS Solutions Architecture",
            issuer: "AWS",
            description: "Designed scalable cloud-based solutions.",
            pdf: AWSCert,
            icon: <FaAws size={50} className="text-orange-500" />
        },
        {
            title: "Goldman Sachs Cybersecurity",
            issuer: "Goldman Sachs",
            description: "Worked on cybersecurity challenges.",
            pdf: GoldmanCert,
            icon: <FaUserShield size={50} className="text-red-500" />
        },
        {
            title: "Generative AI by Microsoft",
            issuer: "LinkedIn",
            description: "Covered AI fundamentals & ethical AI.",
            pdf: LinkdinCert,
            icon: <FaReact size={50} className="text-purple-500" />
        }
    ];

    const courses = [
        { title: "Full Stack Web Development", platform: "Udemy", description: "React, Node.js, MongoDB, and Express.", icon: <FaReact size={50} className="text-blue-500" /> },
        { title: "Advanced Java Programming", platform: "Coursera", description: "OOP, multithreading, and data structures.", icon: <FaJava size={50} className="text-orange-600" /> },
        { title: "Cloud Computing with AWS", platform: "AWS Academy", description: "AWS services and cloud architectures.", icon: <FaAws size={50} className="text-yellow-500" /> },
    ];

    useGsapAnimations();

    return (
        <div ref={sectionRef} className="min-h-screen text-white py-12 px-6 sm:px-12">
            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 gsap-animate-desktop">
                {["Certificates", "Experience", "Courses"].map((tab) => (
                    <motion.button
                        key={tab}
                        className={`px-6 py-3 text-lg font-semibold rounded-full border-4 border-black shadow-xl transition-all duration-300 w-full sm:w-auto 
                        ${selectedTab === tab ? "bg-yellow-400 text-black" : "bg-gray-800 text-white hover:bg-yellow-300"}`}
                        onClick={() => setSelectedTab(tab)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tab}
                    </motion.button>
                ))}
            </div>

            {/* Cards Section */}
            <div className="flex justify-center flex-wrap gap-6 gsap-animate-desktop">
                {selectedTab === "Experience" &&
                    experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="animate-on-scroll w-[280px] h-[400px] bg-gray-900 rounded-3xl p-6 border-4 border-black shadow-lg hover:scale-105 transition-all flex flex-col justify-between cursor-pointer"
                            onClick={() => setPopupData(exp)}
                        >
                            {exp.icon}
                            <div>
                                <h3 className="text-xl font-semibold text-yellow-300">{exp.title}</h3>
                                <p className="text-gray-400">{exp.period}</p>
                                <p className="text-gray-500 italic">{exp.company}</p>
                                <p className="mt-2 text-gray-300">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}

                {selectedTab === "Certificates" &&
                    certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="animate-on-scroll w-[280px] h-[480px] bg-gray-900 rounded-3xl p-6 border-4 border-black shadow-lg hover:scale-105 transition-all flex flex-col justify-between cursor-pointer"
                            onClick={() => setPopupData(cert)}
                        >
                            {cert.icon}
                            <div>
                                <h3 className="text-xl font-semibold text-yellow-300">{cert.title}</h3>
                                <p className="text-gray-400">Issued by: {cert.issuer}</p>
                                <p className="text-gray-500">{cert.description}</p>
                            </div>

                            {/* View Certificate Button */}
                            <a
                                href={cert.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 bg-yellow-500 text-black text-center font-bold py-2 px-4 rounded-lg transition hover:bg-yellow-400"
                            >
                                View Certificate
                            </a>
                        </motion.div>
                    ))}

                {selectedTab === "Courses" &&
                    courses.map((course, index) => (
                        <motion.div
                            key={index}
                            className="animate-on-scroll w-[280px] h-[400px] bg-gray-900 rounded-3xl p-6 border-4 border-black shadow-lg hover:scale-105 transition-all flex flex-col justify-between cursor-pointer"
                            onClick={() => setPopupData(course)}
                        >
                            {course.icon}
                            <div>
                                <h3 className="text-xl font-semibold text-yellow-300">{course.title}</h3>
                                <p className="text-gray-400">Platform: {course.platform}</p>
                                <p className="text-gray-500">{course.description}</p>
                            </div>
                        </motion.div>
                    ))}
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {popupData && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPopupData(null)}
                    >
                        <motion.div
                            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border-4 border-black w-96 max-h-[80vh] overflow-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold mb-3 text-yellow-400">{popupData.title}</h2>
                            <p className="text-gray-300">{popupData.description}</p>
                            <button className="mt-4 bg-red-500 px-4 py-2 rounded-md" onClick={() => setPopupData(null)}>
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ExperienceSection;
