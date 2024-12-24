import React from 'react';

const MenuOptions = ({ closeMenu }) => {
  return (
    <ul className="flex flex-col space-y-3 text-lg">
      <li
        className="hover:text-yellow-500 cursor-pointer text-gray-300 transition-colors duration-300"
        onClick={closeMenu}
      >
       <a href="#MainId"> Home</a>
      </li>
      <li
        className="hover:text-yellow-500 cursor-pointer text-gray-300 transition-colors duration-300"
        onClick={closeMenu}
      >
        <a href="#personalh11">Personal Info</a>
      </li>
      <li
        className="hover:text-yellow-500 cursor-pointer text-gray-300 transition-colors duration-300"
        onClick={closeMenu}
      >
        <a href="#personalh12">Skills</a>
      </li>
      <li
        className="hover:text-yellow-500 cursor-pointer text-gray-300 transition-colors duration-300"
        onClick={closeMenu}
      >
        <a href="#personalh14">Work Experience</a>
      </li>
      <li
        className="hover:text-yellow-500 cursor-pointer text-gray-300 transition-colors duration-300"
        onClick={closeMenu}
      >
        <a href="#personalh13">Projects</a>
      </li>
      <li
        className="hover:text-yellow-500 cursor-pointer text-gray-300 transition-colors duration-300"
        onClick={closeMenu}
      >
        <a href="#personalh15">Contact</a>
      </li>

      {/* CV Button for Mobile View */}
      <li className="md:hidden">
        <button className="bg-black text-white px-8 py-1.5 border-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 text-sm"
        onClick={() => window.open("/components/Swapnil Patil Resume final.pdf", "_blank")}>
          <i className="fa-solid fa-download"></i>
          <span> CV</span>
        </button>
      </li>
    </ul>
  );
};

export default MenuOptions;
