import React, { useState, useEffect } from 'react';
import MenuOptions from './MenuOptions';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Reset state on page change
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div id="header" className="z-[1000] p-5 flex items-center justify-end fixed top-3 left-0 right-0 bg-white bg-opacity-0 ">
      {/* Desktop buttons */}
      <div className="hidden md:flex space-x-4">
        <button
          className="bg-black text-white px-8 py-1.5 border-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 text-sm lg:text-base"
          onClick={() => window.open("/public/images/Swapnil Patil Resume final.pdf", "_blank")}
        >
          <i className="fa-solid fa-download"></i>
          <span> CV</span>
        </button>
      </div>


      {/* Hamburger icon */}
      <i
        className="fa-solid fa-bars px-5 py-2 text-2xl cursor-pointer text-yellow-500"
        onClick={() => setIsOpen(!isOpen)}
      ></i>

      {/* Menu options */}
      {isOpen && (
        <div className="absolute top-16 right-5 shadow-lg rounded-lg p-2 bg-black">
          <MenuOptions closeMenu={closeMenu} />
        </div>
      )}
    </div>
  );
};

export default Header;
