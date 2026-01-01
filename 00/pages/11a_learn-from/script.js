import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  scale: 0.9,
  duration: 0.6,
  delay: 0.2,
  stagger: 0.5,
  ease: "power4.out",
});

//      both are same     //
// gsap.from(".card-1", {
//   y: 60,
//   opacity: 0,
//   scale: 0.9,
//   duration: 0.6,
//   delay: 0.2,
//   ease: "power4.out",
// });
// gsap.from(".card-2", {
//   y: 60,
//   opacity: 0,
//   scale: 0.9,
//   duration: 0.6,
//   delay: 0.5,
//   ease: "power4.out",
// });
// gsap.from(".card-3", {
//   y: 60,
//   opacity: 0,
//   scale: 0.9,
//   duration: 0.6,
//   delay: 0.8,
//   ease: "power4.out",
// });

repeat.addEventListener("click", () => {
  animation.restart();
});
