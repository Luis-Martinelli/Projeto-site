//header
const drop = document.querySelector('.dropdown');
const menu = document.getElementById('dropdown');
const ico = document.querySelector('.ico');

menu.onclick = () => {
  drop.classList.toggle('ativo');
  ico.classList.toggle('ativo');
};
//Login
const showLogin = document.getElementById('show');
const login = document.querySelector('dialog');
const close = document.querySelector('.close-btn');

showLogin.onclick = () => {
  login.showModal();
};
close.onclick = () => {
  login.close();
};

//Menu-footer
$('.menu-f').on('click', function () {
  $('.drop-f').slideToggle(800);
  $('.ico-f').toggleClass('ativa');
});
// Animação
new SimpleAnime();

// Ativar itens do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);
