import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
      duration: 0.1,
      css: { overflowY: "hidden" },
      ease: "power3.inOut",
    })
    .to(".preloader__img", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .to(".preloader__text", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".preloader__img img", {
      duration: 1.0,
      delay: 0.0,
      opacity: 0,
      y: -200,
      ease: "bounce.out",
    })
    .from(".preloader__text span", {
      duration: 1.2,
      opacity: 0,
      y: -200,
      stagger: 0.3,
      ease: "bounce.out",
    })
    .to(".preloader__text span", {
      duration: 1,
      delay: 0.2,
      y: 120,
      stagger: 0.2,
      opacity: 0,
      ease: "Power3.easeOut",
    })
    .to(".preloader__img img", {
      duration: 0.2,
      y: -120,
      opacity: 0,
      ease: "Power3.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 0.8,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: () => {
          setTimeout(() => {
            // After animation completes, reset overflow and hide preloader
            document.body.style.overflowY = "scroll";
            document.querySelector(".preloader").style.display = "none";
          }, 150);
        },
    });
};