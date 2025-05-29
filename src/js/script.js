//DECLARANDO AS VARIAVEIS
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.header-menu');

//CRIANDO A FUNÇÃO PARA VERIFICAR SE ESTÁ ATIVO OU NÃO
function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}
//CRIA O EVENTO PARA EXECUTAR O CLICK
hamburguer.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});