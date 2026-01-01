import gsap from "gsap";

let animation = gsap.to(".box", {
  rotate: 360,
  scale: 1,
  duration: 2,
  borderRadius: "50%",
});

let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let resume = document.querySelector(".resume");
let restart = document.querySelector(".restart");
let reverse = document.querySelector(".reverse");
let kill = document.querySelector(".kill");
let yoyo = document.querySelector(".yoyo");

play.addEventListener("click", () => {
  animation.play();
});
pause.addEventListener("click", () => {
  animation.pause();
});
resume.addEventListener("click", () => {
  animation.resume();
});
resume.addEventListener("click", () => {
  animation.resume();
});
restart.addEventListener("click", () => {
  animation.restart();
});
reverse.addEventListener("click", () => {
  animation.reverse();
});
kill.addEventListener("click", () => {
  animation.kill();
});
yoyo.addEventListener("click", () => {
  animation.yoyo(true);
});
