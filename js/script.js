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
const login = document.querySelector('.popup');
const close = document.querySelector('.close-btn');

showLogin.onclick = () => {
  login.classList.add('active');
};

close.onclick = () => {
  login.classList.remove('active');
};

//Menu-footer
$('.menu-f').on('click', function () {
  $('.drop-f').slideToggle(800);
  $('.ico-f').toggleClass('ativa');
});
