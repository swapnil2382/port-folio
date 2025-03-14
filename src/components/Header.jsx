import React, { useState } from "react";
import MenuOptions from "./MenuOptions";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between w-[85%] md:w-[60%] max-w-[550px] h-[70px] px-5 bg-black/80 backdrop-blur-lg shadow-lg rounded-full border border-white/20 transition-all duration-300">
      

      <div className="flex items-center">
        <a href="#home">
          <img
            src="https://us.123rf.com/450wm/mamun25g/mamun25g2007/mamun25g200701134/151666985-s-letter-logo-design-letter-s-design-s-logo.jpg"
            alt="S Logo"
            className="h-14 w-14 object-contain cursor-pointer rounded-full transition-all duration-300 hover:animate-wobble"
          />
        </a>
      </div>


      <ul className="hidden md:flex space-x-6 text-[16px] font-semibold text-gray-200 tracking-wide">
        {[
          { name: "About", id: "page2" },
          { name: "Skills", id: "page3" },
          { name: "Experience", id: "page5" },
          { name: "Projects", id: "page4" },
          { name: "Contact", id: "page6" }
        ].map((item, index) => (
          <li key={index} className="relative cursor-pointer transition-all duration-300 group hover:animate-bounce-small">
            <a href={`#${item.id}`} className="group-hover:text-yellow-500">
              {item.name}
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div className="md:hidden relative z-10">
        <i
          className="fa-solid fa-bars text-[22px] text-yellow-500 cursor-pointer transition-all duration-300 hover:animate-wobble"
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>


      {menuOpen && (
        <div className="absolute top-full right-0 mt-3 bg-black/90 shadow-lg rounded-lg p-4 w-48 flex flex-col space-y-3">
          <MenuOptions closeMenu={() => setMenuOpen(false)} />
        </div>
      )}


      <style>
        {`
          /* Wobble Effect (Fun Jitter) */
          @keyframes wobble {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            50% { transform: rotate(-5deg); }
            75% { transform: rotate(3deg); }
          }
          .hover\\:animate-wobble:hover {
            animation: wobble 0.4s ease-in-out;
          }

          /* Small Bounce Effect */
          @keyframes bounceSmall {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .hover\\:animate-bounce-small:hover {
            animation: bounceSmall 0.3s ease-in-out;
          }

          /* Soft Glow Animation */
          @keyframes glowing {
            0% { box-shadow: 0px 0px 10px rgba(255, 204, 0, 0.3); }
            50% { box-shadow: 0px 0px 20px rgba(255, 204, 0, 0.6); }
            100% { box-shadow: 0px 0px 10px rgba(255, 204, 0, 0.3); }
          }
          nav:hover {
            animation: glowing 1.5s infinite ease-in-out;
          }
        `}
      </style>
    </nav>
  );
};

export default Header;
