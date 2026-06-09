const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navBar = document.querySelector(".nav-list");

openBtn.addEventListener("click", () => {
  navBar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
});

const sr = ScrollReveal({
  distance: "120px",
  delay: 450,
  reset: false,
});

const revealOptions = [
  {
    label: ".info-home",
    delay: 1210,
    duration: 1012,
    origin: "top",
    distance: "320px",
  },
  {
    label: ".home-img",
    delay: 120,
    duration: 1012,
    origin: "left",
    distance: "680px",
  },
  {
    label: ".about-img",
    delay: 100,
    duration: 1012,
    origin: "left",
  },
  {
    label: ".info-about",
    delay: 200,
    duration: 1012,
    origin: "left",
    distance: "220px",
  },
  {
    label: ".aqua",
    delay: 200,
    duration: 380,
    origin: "left",
    distance: "240px",
  },
  {
    label: ".kazuma",
    delay: 200,
    duration: 480,
    origin: "left",
    distance: "240px",
  },
  {
    label: ".megumin",
    delay: 200,
    duration: 580,
    origin: "left",
    distance: "240px",
  },
  {
    label: ".darkness",
    delay: 200,
    duration: 680,
    origin: "left",
    distance: "240px",
  },
  {
    label: ".yunyun",
    delay: 600,
    duration: 380,
    origin: "left",
    distance: "240px",
  },
  {
    label: ".wiz",
    delay: 600,
    duration: 480,
    origin: "left",
    distance: "240px",
  },
  {
    label: ".eris",
    delay: 600,
    duration: 580,
    origin: "left",
    distance: "240px",
  },
  {
    label: ".komekko_vanir",
    delay: 600,
    duration: 680,
    origin: "left",
    distance: "240px",
  },
];

revealOptions.forEach((option) => {
  sr.reveal(option.label, {
    delay: option.delay,
    duration: option.duration,
    origin: option.origin,
    distance: option.distance,
  });
});
