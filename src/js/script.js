document.addEventListener("DOMContentLoaded", function () {
 // Hamburguer menu
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.header-menu');

function toggleMenu() {
  hamburguer.classList.toggle('active');
  headerMenu.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('item-menu')) {
    toggleMenu();
  }
});

// SLIDESHOW
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

// Autoplay
function autoPlaySlides() {
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide(slideIndex);
}

// Event listeners dos botões
prevBtn.addEventListener("click", () => plusSlides(-1));
nextBtn.addEventListener("click", () => plusSlides(1));

// Iniciar o slideshow
showSlide(slideIndex);
setInterval(autoPlaySlides, 5000); // Troca a cada 5 segundos
});
