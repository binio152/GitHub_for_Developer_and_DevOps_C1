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

sr.reveal(".info-home", {
  delay: 1210,
  duration: 1012,
  origin: "top",
  distance: "320px",
});
sr.reveal(".home-img", {
  delay: 120,
  duration: 1012,
  origin: "left",
  distance: "680px",
});

sr.reveal(".about-img", {
  delay: 100,
  duration: 1012,
  origin: "left",
});

sr.reveal(".infor-about", {
  delay: 200,
  duration: 1012,
  origin: "left",
  distance: "220px",
});

sr.reveal(".aqua", {
  delay: 200,
  duration: 380,
  origin: "left",
  distance: "240px",
});

sr.reveal(".kazuma", {
  delay: 200,
  duration: 480,
  origin: "left",
  distance: "240px",
});

sr.reveal(".megumin", {
  delay: 200,
  duration: 580,
  origin: "left",
  distance: "240px",
});

sr.reveal(".darkness", {
  delay: 200,
  duration: 680,
  origin: "left",
  distance: "240px",
});

sr.reveal(".yunyun", {
  delay: 600,
  duration: 380,
  origin: "left",
  distance: "240px",
});

sr.reveal(".wiz", {
  delay: 600,
  duration: 480,
  origin: "left",
  distance: "240px",
});

sr.reveal(".eris", {
  delay: 600,
  duration: 580,
  origin: "left",
  distance: "240px",
});

sr.reveal(".komekko_vanir", {
  delay: 600,
  duration: 680,
  origin: "left",
  distance: "240px",
});
