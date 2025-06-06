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
document.addEventListener("DOMContentLoaded", () => {
  const cepInput = document.getElementById("cep");
  const telefoneInput = document.getElementById("telefone");

  function permitirSomenteNumeros(input) {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, ""); // Remove qualquer coisa que não for número
    });
  }

  permitirSomenteNumeros(cepInput);
  permitirSomenteNumeros(telefoneInput);
});
