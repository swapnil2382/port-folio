import React, { useState } from "react";
import useGsapAnimations from "./useGsapAnimations";
import AccentureCert from "../components/Accenture Certificate.pdf";
import AWSCert from "../components/AWS certificate.pdf";
import LinkdinCert from "../components/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf";
import GoldmanCert from "../components/Goladsmash Certificate.pdf";

<<<<<<< HEAD

const ExperienceSection = () => {

    useGsapAnimations(".animate-on-scroll");

    const [selectedTab, setSelectedTab] = useState("Experience");
    const [selectedCertificate, setSelectedCertificate] = useState(null); // To handle the modal

    const experiences = [
        {
            title: "Full Stack Developer",
            period: "Rainny 2023 ",
            company: "Prodigy InfoTech",
            description:
                "Worked on creating responsive and dynamic web applications using React and Node.js.",
        },
        {
            title: "Front-End Developer Intern",
            period: "Winter 2023",
            company: "Octanet",
            description: "Focused on building interactive UI components and optimizing performance.",
        },
    ];

    const certificates = [
        {
            title: "Data Analysis Certification",
            issuer: "Accenture",
            description:
                "Project Understanding Data Cleaning & Modeling Data Visualization & Storytelling Present to the Client",
            image: AccentureCert, // Add the path to the certificate image
        },
        {
            title: "AWS APAC Solutions Architecture Virtual Experience Program - December 2024",
            issuer: "Amazon Web Services",
            description: "Designing a simple, scalable, hosting architecture",
            image: AWSCert,
        },
        {
            title: "Goldman Sachs Software Engineering Virtual Experience Program – December 2024",
            issuer: "Goldman Sachs",
            description: "Crack leaked password database",
            image: GoldmanCert,
        },
        {
            title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
            issuer: "LinkedIn Learning",
            description:
                "Top skills covered: Computer Ethics, Artificial Intelligence (AI), Generative AI",
            image: LinkdinCert,
        },
    ];

    return (
        <div id="exmain" className="bg-white text-black p-8 z-0 animate-on-scroll">
            {/* Section Header */}
            <h2 id="exh1" className="text-3xl font-bold text-center mb-8">
                My <span className="text-yellow-500">Journey</span>
            </h2>

            <div className="flex flex-col md:flex-row">
                {/* Left Tabs */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-6">
                    <button
                        className={`py-2 px-4 rounded-md ${selectedTab === "Experience"
                                ? "bg-yellow-500 text-white"
                                : "bg-gray-200 text-black"
                            }`}
                        onClick={() => setSelectedTab("Experience")}
                    >
                        Experience
                    </button>
                    <button
                        className={`py-2 px-4 rounded-md ${selectedTab === "Certificates"
                                ? "bg-yellow-500 text-white"
                                : "bg-gray-200 text-black"
                            }`}
                        onClick={() => setSelectedTab("Certificates")}
                    >
                        Certificates
                    </button>
                </div>

                {/* Right Content */}
                <div className="flex-1 ml-0 md:ml-12 mt-6 md:mt-0">
                    {selectedTab === "Experience" ? (
                        <div className="grid grid-cols-1 gap-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="p-4 border-l-4 border-yellow-500 bg-gray-50 shadow-md"
                                >
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    <p className="text-gray-600">{exp.period}</p>
                                    <p className="text-sm text-gray-500 italic">{exp.company}</p>
                                    <p className="mt-2 text-gray-800">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="p-4 border-l-4 border-yellow-500 bg-gray-50 shadow-md"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                                        <p className="text-gray-600">Issued by: {cert.issuer}</p>
                                        <p className="text-sm text-gray-500 mb-3">{cert.description}</p>
                                    </div>
                                    {/* View Button */}
                                    <div className="mt-4 md:mt-0 flex justify-end md:justify-start">
                                        <button
                                            className="bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 w-full md:w-auto"
                                            onClick={() => window.open(cert.image, '_blank')}
                                        >
                                            View
                                        </button>
                                    </div>

=======
const ExperienceSection = () => {
    useGsapAnimations(".animate-on-scroll");

    const [selectedTab, setSelectedTab] = useState("Experience");

    const experiences = [
        { title: "Full Stack Developer", period: "Rainy 2023", company: "Prodigy InfoTech", description: "Developed dynamic web applications using React, Node.js, and MongoDB." },
        { title: "Front-End Developer Intern", period: "Winter 2023", company: "Octanet", description: "Created interactive UI components and optimized performance." },
    ];

    const certificates = [
        { title: "Data Analysis Certification", issuer: "Accenture", description: "Data cleaning, modeling, and visualization.", image: AccentureCert },
        { title: "AWS APAC Solutions Architecture", issuer: "AWS", description: "Designed scalable cloud-based solutions.", image: AWSCert },
        { title: "Goldman Sachs Software Engineering", issuer: "Goldman Sachs", description: "Worked on cybersecurity challenges.", image: GoldmanCert },
        { title: "Generative AI by Microsoft & LinkedIn", issuer: "LinkedIn", description: "Covered AI fundamentals & ethical AI.", image: LinkdinCert },
    ];

    const courses = [
        { title: "Full Stack Web Development", platform: "Udemy", description: "React, Node.js, MongoDB, and Express." },
        { title: "Advanced Java Programming", platform: "Coursera", description: "OOP, multithreading, and data structures." },
        { title: "Cloud Computing with AWS", platform: "AWS Academy", description: "AWS services and cloud architectures." },
    ];

    return (
        <div className="bg-white text-black py-8 px-4 sm:px-6 md:px-10 animate-on-scroll">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-800">
                My <span className="text-yellow-500">Journey</span>
            </h2>

            {/* Main Layout */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-6xl mx-auto">
                {/* Sidebar Buttons (Top in Mobile, Left in Laptop) */}
                <div className="flex md:flex-col gap-2 md:w-1/4">
                    {["Experience", "Certificates", "Courses"].map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 sm:py-3 px-4 sm:px-6 w-full rounded-md text-sm sm:text-base font-medium shadow-md transition-all duration-300 
                            ${selectedTab === tab 
                                ? "bg-yellow-500 text-white transform scale-105 shadow-lg" 
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"}
                            `}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className="flex-1 bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200">
                    {/* Experience Section */}
                    {selectedTab === "Experience" && (
                        <div className="grid gap-4 sm:gap-6">
                            {experiences.map((exp, index) => (
                                <div key={index} className="p-4 sm:p-5 border-l-4 border-yellow-500 bg-gray-50 shadow-sm rounded-md">
                                    <h3 className="text-lg sm:text-xl font-semibold">{exp.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">{exp.period}</p>
                                    <p className="text-xs sm:text-sm text-gray-500 italic">{exp.company}</p>
                                    <p className="mt-1 sm:mt-2 text-gray-800 text-sm sm:text-base">{exp.description}</p>
>>>>>>> 160203e (Updated portfolio with new design)
                                </div>
                            ))}
                        </div>
                    )}
<<<<<<< HEAD
                </div>
            </div>

            {/* Modal for Viewing Certificates */}
            {selectedCertificate && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedCertificate(null)}
                        >
                            &#x2715;
                        </button>
                        <h3 className="text-xl font-semibold mb-4">
                            {selectedCertificate.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Issued by: {selectedCertificate.issuer}
                        </p>
                        <img
                            src={selectedCertificate.image}
                            alt={selectedCertificate.title}
                            className="w-full rounded-md"
                        />
                    </div>
                </div>
            )}
=======

                    {/* Certificates Section */}
                    {selectedTab === "Certificates" && (
                        <div className="grid gap-4 sm:gap-6">
                            {certificates.map((cert, index) => (
                                <div key={index} className="p-4 sm:p-5 border-l-4 border-yellow-500 bg-gray-50 shadow-sm rounded-md">
                                    <h3 className="text-lg sm:text-xl font-semibold">{cert.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Issued by: {cert.issuer}</p>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{cert.description}</p>
                                    <button
                                        className="bg-yellow-500 text-white rounded-md py-1.5 sm:py-2 px-4 hover:bg-yellow-600 transition-all text-sm sm:text-base"
                                        onClick={() => window.open(cert.image, '_blank')}
                                    >
                                        View Certificate
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Courses Section */}
                    {selectedTab === "Courses" && (
                        <div className="grid gap-4 sm:gap-6">
                            {courses.length > 0 ? (
                                courses.map((course, index) => (
                                    <div key={index} className="p-4 sm:p-5 border-l-4 border-yellow-500 bg-gray-50 shadow-sm rounded-md">
                                        <h3 className="text-lg sm:text-xl font-semibold">{course.title}</h3>
                                        <p className="text-gray-600 text-sm sm:text-base">Platform: {course.platform}</p>
                                        <p className="text-xs sm:text-sm text-gray-500">{course.description}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600 text-center text-sm sm:text-base">No courses available.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
>>>>>>> 160203e (Updated portfolio with new design)
        </div>
    );
};

export default ExperienceSection;
