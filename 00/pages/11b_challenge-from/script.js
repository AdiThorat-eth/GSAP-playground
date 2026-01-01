import gsap from "gsap";

// Selecting the main card container
let card = document.querySelector("#card");

// Animation for Hover In
card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 0.8,
    ease: "power2.out",
  });
});

// Animation for Hover Out
card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});
