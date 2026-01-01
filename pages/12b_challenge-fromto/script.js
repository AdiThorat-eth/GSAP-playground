import gsap from "gsap";

let reaction = document.querySelectorAll(".reactions");

reactions.forEach((reaction) => {
  reaction.addEventListener("click", () => {
    gsap.fromTo(
      reaction,
      {
        y: 20,
        scale: 1.2,
        rotateY: 180,
        duration: 2,
      },
      {
        y: 0,
        scale: 1,
      }
    );
  });
});
