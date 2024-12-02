const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav_items");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".hero-section p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".hero-section h1", {
  ...scrollRevealOption,
  delay: 500,
});


ScrollReveal().reveal(".image-box img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-us .section-tag", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".content-box h2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".content-box .section-info", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".reserve-btn-box", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".room-item", {
  ...scrollRevealOption,
  interval: 500,
});


ScrollReveal().reveal(".facilities-list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});