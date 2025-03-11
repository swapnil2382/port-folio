import React, { useState } from "react";
import { FaUser, FaUniversity, FaBook, FaCalendarAlt } from "react-icons/fa";

const Page2text = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const infoList = [
    { icon: <FaUser className="text-blue-500 text-xl" />, label: "Name", value: "Swapnil Prakash Patil" },
    { icon: <FaUniversity className="text-green-500 text-xl" />, label: "College", value: "Saraswati College of Engineering, Kharghar" },
    { icon: <FaBook className="text-orange-500 text-xl" />, label: "Degree", value: "Computer Engineering" },
    { icon: <FaUniversity className="text-green-500 text-xl" />, label: "University", value: "Mumbai University" },
    { icon: <FaCalendarAlt className="text-purple-500 text-xl" />, label: "Expected Graduation", value: "2026" },
    { icon: <FaBook className="text-orange-500 text-xl" />, label: "Coursework", value: "Data Structures, Algorithms, Web Development, Database Systems" },
  ];

  return (
    <div className="text-black p-6 w-full">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">About Me</h2>

      {/* Intro for Mobile View */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center md:text-left">
        Hi, I'm Swapnil, a 3rd-year Computer Engineering student passionate about web development, AI, and problem-solving. 
      </p>

      {/* Accordion (Mobile View) */}
      <div className="md:hidden">
        {infoList.map((item, index) => (
          <div key={index} className="mb-3 border border-gray-300 rounded-lg overflow-hidden max-w-[500px]">
            <button
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="font-semibold text-gray-800">{item.label}</span>
              </div>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 bg-white text-gray-700">{item.value}</div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View (Normal List) */}
      <div className="hidden md:block">
        <ul className="space-y-4 text-lg">
          {infoList.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              {item.icon}
              <span className="font-semibold text-gray-800">{item.label}:</span>
              <span className="text-gray-700">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page2text;
