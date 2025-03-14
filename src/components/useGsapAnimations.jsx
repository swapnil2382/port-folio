import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".gsap-animate");

    // Loop over each element to apply the animation
    elements.forEach((el) => {
      // Set initial states for visibility and opacity, without affecting position
      gsap.set(el, { visibility: "hidden", opacity: 0 });

      // GSAP animation with ScrollTrigger
      gsap.to(el, {
        opacity: 1,  // Only animate opacity for fade-in effect
        visibility: "visible",  // Make sure the element is visible
        duration: 0.6,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",  // Trigger the animation when the element is 85% into view
          end: "top 50%",    // End the animation when the element is 50% into view
          toggleActions: "play none none reset",  // Play animation when the element enters the viewport
          markers: false,   // You can enable markers for debugging
          scrub: false,
          pin: false,        // Ensure content doesn't get pinned while animating
        },
      });
    });

    // Add event listener for window resize to handle mobile and desktop views
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const updateMobileAnimations = () => {
      elements.forEach((el) => {
        gsap.set(el, { visibility: "hidden", opacity: 0 });

        gsap.to(el, {
          opacity: 1,   // Only animate opacity for smooth reveal
          visibility: "visible",
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",  // Start earlier on mobile
            end: "top 40%",    // End animation sooner for mobile
            toggleActions: "play none none reset",
            markers: false,
            scrub: false,
            pin: false,
          },
        });
      });
    };

    // If the screen width is <= 768px, apply mobile-specific animations
    if (mobileQuery.matches) {
      updateMobileAnimations();
    }

    // Listen for changes in screen size
    mobileQuery.addListener((e) => {
      if (e.matches) {
        updateMobileAnimations(); // Apply mobile animation
      } else {
        // Reset to default animation behavior for larger screens
        updateMobileAnimations(); // This can be customized further for larger screens
      }
    });

    // Cleanup on component unmount
    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);
};

export default useGsapAnimations;
