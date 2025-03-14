import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".gsap-animate");

    elements.forEach((el) => {
      gsap.set(el, { visibility: "hidden", opacity: 0, scale: 0.5, y: 50 });

      gsap.to(el, {
        opacity: 1,
        scale: 1,
        y: 0, 
        visibility: "visible",
        duration: 0.6,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reset",
        },
      });
    });
  }, []);
};

export default useGsapAnimations;
