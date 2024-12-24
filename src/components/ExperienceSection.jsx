import React, { useState } from "react";
import useGsapAnimations from "./useGsapAnimations";


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
            image: "/images/Accenture Certificate.pdf", // Add the path to the certificate image
        },
        {
            title: "AWS APAC Solutions Architecture Virtual Experience Program - December 2024",
            issuer: "Amazon Web Services",
            description: "Designing a simple, scalable, hosting architecture",
            image: "/images/AWS certificate.pdf",
        },
        {
            title: "Goldman Sachs Software Engineering Virtual Experience Program – December 2024",
            issuer: "Goldman Sachs",
            description: "Crack leaked password database",
            image: "/images/Goladsmash Certificate.pdf",
        },
        {
            title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
            issuer: "LinkedIn Learning",
            description:
                "Top skills covered: Computer Ethics, Artificial Intelligence (AI), Generative AI",
            image: "/images/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
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

                                </div>
                            ))}
                        </div>
                    )}
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
        </div>
    );
};

export default ExperienceSection;
