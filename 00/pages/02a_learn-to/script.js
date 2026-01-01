import gsap from "gsap";
gsap.to(".toast", {
  //   x: -20,
  y: -50,
  scale: 2,
  ease: "expo.inOut",
  yoyo: true,
  repeat: -1,
  rotationY: 360,
  duration: 3,
  borderRadius: "50%",
  delay: 2,
});
