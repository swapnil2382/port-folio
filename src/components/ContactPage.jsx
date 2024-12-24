import React from "react";
import useGsapAnimations from "./useGsapAnimations";


const ContactPage = () => {

    useGsapAnimations(".animate-on-scroll");

  return (
    <div className=" flex justify-center items-center text-white mt-5">
        
      {/* Main Container */}
      <div className="flex flex-1 flex-col justify-center items-center text-black text-center p-6  animate-on-scroll">
    <h2 className="text-4xl font-bold mb-6">"Let’s build something amazing together!"</h2>
    <p className="text-lg mb-3">
      <i className="fas fa-phone-alt mr-3"></i>+91 7410522382
    </p>
    <p className="text-lg">
      <i className="fas fa-envelope mr-3"></i>swapnilpatil2382@gmail.com
    </p>

    {/* Social Media Icons */}
    <div className="flex justify-center gap-6 mt-6  animate-on-scroll">
      {/* Instagram */}
      <div className="w-12 h-12 rounded-full bg-blue-600 flex justify-center items-center cursor-pointer hover:bg-blue-800">
       <a href="https://www.instagram.com/swapnil._16/?igsh=MXViZ3hkZ3JzcTlhMQ%3D%3D">  <i className="fab fa-instagram text-white text-xl"></i></a> 
      </div>

      {/* WhatsApp */}
      <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center cursor-pointer hover:bg-green-700">
        <a href="https://wa.me/917410522382"><i className="fab fa-whatsapp text-white text-xl"></i></a>
      </div>

      {/* LinkedIn */}
      <div className="w-12 h-12 rounded-full bg-blue-700 flex justify-center items-center cursor-pointer hover:bg-blue-900">
        <a href="https://www.linkedin.com/in/swapnil-patil-1029492bb/"><i className="fab fa-linkedin-in text-white text-xl"></i></a>
      </div>

      {/* GitHub */}
      <div className="w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center cursor-pointer hover:bg-gray-900">
        <a href="https://github.com/swapnil2382"><i className="fab fa-github text-white text-xl"></i></a>
      </div>
    </div>


        {/* Right Section */}
        <div id="contactmain" className="flex flex-1 flex-col justify-center items-center text-blacktext-center p-6 w-[80%] animate-on-scroll">
          <form className="w-full max-w-sm">
            <label className="block text-sm mb-2 text-left">Your Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 mb-4 border border-gray-400 rounded bg-transparent text-white"
            />

            <label className="block text-sm mb-2 text-left">Your Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border border-gray-400 rounded bg-transparent text-white"
            />

            <label className="block text-sm mb-2 text-left">Your Message:</label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 mb-4 border border-gray-400 rounded bg-transparent text-white"
            ></textarea>

            <button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
