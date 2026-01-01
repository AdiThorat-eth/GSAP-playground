import gsap from "gsap";

let card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 0.8,
    ease: "power2.out",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});
