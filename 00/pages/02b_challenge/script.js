import gsap from "gsap";

gsap.to(".toast.one", {
  y: -300,
  scale: 1.5,
  ease: "power1.inOut",
  //   duration: 1,
  onComplete: () => {
    gsap.to(".toast.one", {
      x: -600,
    });
    gsap.to(".toast.two", {
      delay: 0.2,
      y: -300,
      scale: 1.5,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(".toast.two", {
          x: -600,
        });
      },
    });
  },
});
