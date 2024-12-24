import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = (className, effectType = "fadeIn") => {
  useEffect(() => {
    gsap.utils.toArray(className).forEach((el) => {
      let animation;

      switch (effectType) {
        case "fadeIn":
          animation = { opacity: 0, y: 50 };
          break;

        case "slideInFromLeft":
          animation = { opacity: 0, x: -100 };
          break;

        case "fadeInSlideLeft": // Combined effect
          animation = { opacity: 0, x: -100, y: 50 };
          break;

          case "fadeInSlideright": // Combined effect
          animation = { opacity: 0, x: 50, y: 0 };
          break;

        default:
          animation = { opacity: 0, y: 50 };
      }

      gsap.fromTo(
        el,
        animation,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 3,
          stagger: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    });
  }, [className, effectType]);
};

export default useGsapAnimations;
