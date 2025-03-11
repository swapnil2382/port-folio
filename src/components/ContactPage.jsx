import React from "react";
import useGsapAnimations from "./useGsapAnimations";

const ContactPage = () => {
  useGsapAnimations(".animate-on-scroll");

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white text-black p-6">
      
      {/* Left Section - Contact Info */}
      <div className="flex flex-col items-start md:w-1/2 px-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Let's Connect!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have a question or a project in mind? Reach out, and let's create something amazing together!
        </p>

        <div className="space-y-3 text-lg text-gray-800">
          <p className="flex items-center">
            <i className="fas fa-phone-alt text-blue-500 mr-3"></i> +91 7410522382
          </p>
          <p className="flex items-center">
            <i className="fas fa-envelope text-red-500 mr-3"></i> swapnilpatil2382@gmail.com
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 mb-6">
          {[
            { icon: "fab fa-instagram", url: "https://www.instagram.com/swapnil._16", color: "hover:text-pink-600" },
            { icon: "fab fa-whatsapp", url: "https://wa.me/917410522382", color: "hover:text-green-600" },
            { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/swapnil-patil-1029492bb/", color: "hover:text-blue-600" },
            { icon: "fab fa-github", url: "https://github.com/swapnil2382", color: "hover:text-gray-700" },
          ].map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={`${social.icon} text-2xl transition-all ${social.color}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="flex flex-col bg-white shadow-lg p-8 rounded-xl w-full max-w-md md:ml-12 border border-gray-300">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Send a Message</h3>

        <form className="space-y-5">
          <div className="relative">
            <label className="block font-medium mb-1 text-gray-700">Your Name</label>
            <div className="flex items-center border border-gray-400 rounded-lg px-3 bg-gray-100">
              <i className="fas fa-user text-gray-500"></i>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block font-medium mb-1 text-gray-700">Your Email</label>
            <div className="flex items-center border border-gray-400 rounded-lg px-3 bg-gray-100">
              <i className="fas fa-envelope text-gray-500"></i>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block font-medium mb-1 text-gray-700">Your Message</label>
            <div className="flex items-start border border-gray-400 rounded-lg px-3 bg-gray-100">
              <i className="fas fa-comment text-gray-500 mt-3"></i>
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 bg-transparent outline-none h-28 resize-none"
              ></textarea>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-all shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
