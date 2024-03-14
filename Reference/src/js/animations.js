//Open and close accordions
const accordionTitles = document.querySelectorAll(".accordionTitle");
accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("is-open")) {
      accordionTitle.classList.remove("is-open");
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("is-open");
      });
      accordionTitle.classList.add("is-open");
    }
  });
});

// Navbar Animations
// Navbar responsive animations
const menuBtn = document.querySelector("#navbar-menu-btn");
const menu = document.querySelector("#navbarMenu");

// Get the navbar
var navbar = document.getElementById("navbarAnimate");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("text-left");
  navbar.classList.remove("header-transparent");
  ƒ;
});

//Navbar hide and show animations
// When the user scrolls the page, execute navbarAnimation

window.onscroll = function () {
  navbarAnimation();
};

// Get the offset position of the navbar
var offset = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarAnimation() {
  if (window.pageYOffset >= offset) {
    navbar.classList.remove("header-transparent");
    navbar.classList.add("py-4");
    navbar.classList.remove("py-6");
  } else {
    navbar.classList.add("header-transparent");
    navbar.classList.add("py-6");
    navbar.classList.remove("py-4");
  }
}

// Background Animations
//Set canvas context
const context = canvas.getContext("2d");

// Set light and dark canvases seperately
const canvasLight = document.getElementById("canvas-light");
const canvasDark = document.getElementById("canvas-dark");

// Set canvas dimensions to match viewport for both light and dark modes
canvasLight.width = window.innerWidth;
canvasLight.height = window.innerHeight;
canvasDark.width = window.innerWidth;
canvasDark.height = window.innerHeight;
