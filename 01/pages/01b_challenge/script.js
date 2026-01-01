import gsap from "gsap";

// Target the .card element
gsap.to(".card", {
  // 1. Technical Variable: filter
  // We use drop-shadow to create an external glow and brightness to make the card "glow"
  // drop-shadow syntax: x-offset y-offset blur-radius color
  filter: "drop-shadow(0 0 40px rgba(84, 160, 255, 0.8)) brightness(1.3)",

  // 2. Technical Variable: transform
  // Keeping your scale(0.8) but pulsing it slightly to match the light
  scale: 0.85,

  // 3. Animation Properties
  duration: 1.8,
  repeat: -1, // Loop forever
  yoyo: true, // Smoothly reverse back to the start
  ease: "sine.inOut", // Soft, organic transition
});
