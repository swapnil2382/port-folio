import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaUser, FaCommentDots } from "react-icons/fa";
import useGsapAnimations from "../components/useGsapAnimations";

const ContactPage = () => {
  useGsapAnimations();
  return (
    <div className="flex flex-col w-full max-w-3xl items-center text-center mt-10 mb-10">
      

      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500 text-center gsap-animate">
  &lt;/ Contact &gt;
</h1>

      <p className="text-lg text-gray-400 mt-3 max-w-lg gsap-animate">
        Have a project idea, collaboration proposal, or just want to say hi? Fill out the form below, and I'll get back to you soon!
      </p>


      <div className="mt-8 w-full max-w-sm gsap-animate">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Send a Message</h3>

        <form className="space-y-4">

          <div className="relative flex items-center">
            <FaUser className="text-gray-400 absolute left-2" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 pl-8 bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

          <div className="relative flex items-center">
            <FaEnvelope className="text-gray-400 absolute left-2" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 pl-8 bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>


          <div className="relative flex items-center">
            <FaCommentDots className="text-gray-400 absolute left-2 top-3" />
            <textarea
              placeholder="Write your message..."
              className="w-full p-2 pl-8 bg-transparent outline-none text-white placeholder-gray-400 h-16 resize-none"
            ></textarea>
          </div>


          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition-all shadow-lg">
            Send Message
          </button>
        </form>
      </div>


      <div className="flex flex-col items-center mt-12 text-gray-300">
        <h2 className="text-2xl font-bold text-yellow-400 gsap-animate">Other Ways to Reach Me</h2>
        

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-lg gsap-animate">
          <p className="flex items-center">
            <FaPhone className="text-blue-400 mr-2" /> +91 7410522382
          </p>
          <span className="text-gray-500">|</span>
          <p className="flex items-center">
            <FaEnvelope className="text-red-400 mr-2" /> swapnilpatil2382@gmail.com
          </p>
        </div>


        <div className="flex gap-6 mt-6 gsap-animate">
          {[
            { icon: <FaInstagram />, url: "https://www.instagram.com/swapnil._16", color: "hover:text-pink-500" },
            { icon: <FaWhatsapp />, url: "https://wa.me/917410522382", color: "hover:text-green-500" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/swapnil-patil-1029492bb/", color: "hover:text-blue-400" },
            { icon: <FaGithub />, url: "https://github.com/swapnil2382", color: "hover:text-gray-400" },
          ].map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`text-3xl transition-all ${social.color}`}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
