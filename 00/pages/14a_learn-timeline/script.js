// Import GSAP
import gsap from "https://cdn.skypack.dev/gsap";

// Get elements
const cards = document.querySelectorAll(".card");
const detailPage = document.getElementById("detailPage");
const detailImage = document.getElementById("detailImage");
const closeBtn = document.getElementById("closeBtn");

// Card click - Open detail page
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardImage = card.querySelector("img").src;
    detailImage.src = cardImage;
    detailPage.style.display = "flex";

    // TIMELINE: Plays animations ONE AFTER ANOTHER
    const tl = gsap.timeline();

    tl.to(detailPage, { opacity: 1, duration: 0.3 });
    tl.from(detailImage, { y: -100, opacity: 0, duration: 0.5 });
    tl.from("#detailContent", { y: 40, opacity: 0, duration: 0.4 }, "-=0.2"); // overlaps
    tl.from(closeBtn, { scale: 0, duration: 0.3 });
  });
});

// Close button - Close detail page
closeBtn.addEventListener("click", () => {
  const tl = gsap.timeline({
    onComplete: () => (detailPage.style.display = "none"),
  });

  tl.to(closeBtn, { scale: 0, duration: 0.2 });
  tl.to("#detailContent", { y: 40, opacity: 0, duration: 0.3 }, "<"); // '<' = same time
  tl.to(detailImage, { y: -100, opacity: 0, duration: 0.3 });
  tl.to(detailPage, { opacity: 0, duration: 0.2 });
});

/*
TIMELINE BASICS:
1. const tl = gsap.timeline() - Creates timeline
2. tl.to() - Adds animation (plays after previous)
3. '-=0.2' - Start 0.2s BEFORE previous ends
4. '<' - Start at SAME TIME as previous
5. onComplete - Runs when timeline finishes
*/
