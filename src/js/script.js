document.addEventListener('DOMContentLoaded', () => {
  const hamburguer = document.getElementById('hamburguer');
  const navMenu = document.getElementById('nav-menu');

  hamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
    hamburguer.classList.toggle('ativo');
  });

  // Detecta qual link está ativo com base no caminho
  const links = document.querySelectorAll('.header-menu a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
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

