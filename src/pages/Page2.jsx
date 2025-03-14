import React from "react";
import { motion } from "framer-motion";
import profilePic from "../components/swapnilprofilepic.jpg";
import useGsapAnimations from "../components/useGsapAnimations";


const Page2 = () => {
  useGsapAnimations();
  
  return (
    <div id="page2" className=" relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-t from-black to-gray-900 text-white min-h-screen md:h-screen">

      <motion.div
  className="w-full md:w-1/3 flex justify-center md:order-2 mb-6 md:mb-0 relative gsap-animate"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>

  <div className="relative w-[320px] h-[450px] md:w-[380px] md:h-[500px] overflow-hidden rounded-xl shadow-xl transition-all duration-500 group">
    <img
      src={profilePic}
      alt="Swapnil Profile"
      className="w-full h-full object-cover rounded-xl"
    />

    <div className="absolute top-0 left-0 h-1/2 w-[4px] bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_15px_4px_rgba(255,255,0,1)]"></div>
    <div className="absolute top-0 left-0 w-1/2 h-[4px] bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_15px_4px_rgba(255,255,0,1)]"></div>
    <div className="absolute bottom-0 right-0 h-1/2 w-[4px] bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_15px_4px_rgba(255,255,0,1)]"></div>
    <div className="absolute bottom-0 right-0 w-1/2 h-[4px] bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_15px_4px_rgba(255,255,0,1)]"></div>  </div>
</motion.div>

      <motion.div
        className="w-full md:w-2/3 space-y-6 gsap-animate"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
     
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
           // Tilt effect on hover
        >
          &lt;/ AboutMe &gt;
        </motion.h1>

        <p className="text-lg text-gray-300 leading-relaxed transition duration-300 hover:text-yellow-400">
          I am a <b>MERN Stack Developer</b> dedicated to creating{" "}
          <span className="text-yellow-400">high-performance</span>,{" "}
          <span className="text-pink-400">user-friendly web applications</span>.
          <br />
          With expertise in{" "}
          <b className="hover:text-pink-500 transition duration-300">
            React, Next.js, and Tailwind CSS
          </b>
          , I bring ideas to life with seamless, efficient, and visually
          appealing interfaces.
        </p>

        <h2 className="text-2xl font-bold text-yellow-400  transition-all duration-300">
          Tech Stack & Specialties
        </h2>
        <p className="text-gray-300">
          <b className="text-pink-400">React.js</b>, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS,
          Framer Motion, GSAP, Firebase.
          <br />
          I specialize in{" "}
          <span className="text-yellow-400">building complex UIs</span>,{" "}
          <span className="text-pink-400">optimizing performance</span>, and{" "}
          <span className="text-yellow-400">implementing smooth animations</span>.
        </p>

        <h2 className="text-2xl font-bold text-yellow-400  transition-all duration-300">
          What Drives Me?
        </h2>
        <p className="text-gray-300 hover:text-pink-400 transition duration-300">
          I love crafting{" "}
          <b className="text-yellow-400">interactive, engaging experiences</b>{" "}
          that push boundaries in web development.
          <br />
          My focus is on{" "}
          <span className="text-yellow-400">
            performance, accessibility, and futuristic UI/UX
          </span>{" "}
          that <b className="text-pink-400">enhances user engagement</b>.
        </p>


        <h2 className="text-2xl font-bold text-yellow-400 transition-all duration-300">
          Fun Facts
        </h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li className="hover:text-yellow-400 transition duration-300">
            Always exploring{" "}
            <b className="text-pink-400">cutting-edge tech & AI integration</b>.
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            Passionate about{" "}
            <b className="text-yellow-400">minimalist UI/UX</b> with{" "}
            <b className="text-pink-400">vibrant animations</b>.
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            Constantly learning & contributing to{" "}
            <b className="text-yellow-400">open-source projects</b>.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Page2;