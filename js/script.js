//header
const drop = document.querySelector('.dropdown');
const menu = document.getElementById('dropdown');
const ico = document.querySelector('.ico');
const screenSize = window.innerWidth;
const mobileMenu = document.querySelector('.menu-mobile');
menu.onclick = () => {
  if (screenSize > 600) {
    drop.classList.toggle('ativo');
    ico.classList.toggle('ativo');
  }
};
function lookThis(e) {
  window.innerWidth;
  if (screenSize > 600) {
    mobileMenu.classList.add('hidden');
  }
}
lookThis();
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
//Menu Mobile
$('#burger-b').on('click', function () {
  $('.header-menu').slideToggle(600);
  $('.header-meu').toggleClass('active');
  subIcon();
});

function subIcon() {
  const icon = document.getElementById('icon');
  const head = document.querySelector('.header');
  console.log(head);
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-x');
  head.classList.toggle('active');
}

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

//consulta DEJEM
const aviso = document.querySelector('.modal');
const shadow = document.querySelector('.modalShadow');
const idInput = document.querySelector('#idDejem');
const ok = document.querySelector('#close');

idInput.addEventListener('keypress', function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);
  const pattern = '[0-9]';

  if (char.match(pattern)) {
    return true;
  }
}
document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    validar();
  }
});

function validar(e) {
  const idDejem = document.getElementById('idDejem').value;

  if (idDejem == '') {
    aviso.classList.add('active');
    shadow.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    abrirDejem();
  }
}
ok.onclick = () => {
  aviso.classList.toggle('active');
  shadow.classList.toggle('active');
  document.body.style.overflow = '';
};

function abrirDejem() {
  linkDejem =
    'http://sistemasadmin.intranet.policiamilitar.sp.gov.br/Escala/arrelpreesc.aspx?' +
    idDejem.value;
  window.open(linkDejem, '_blank');
}
//Links Internos
function initScrollSuave() {
  const linksIn = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }
  linksIn.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

// Scroll to top
const scrollingDocument = document.scrollingElement || document.documentElement;
const upToTop = document.querySelector('.up-to-top');
upToTop.style.transition = '1s';
window.onscroll = function () {
  if (screenSize > 600) {
    upToTop.style.opacity = scrollingDocument.scrollTop > 500 ? 1 : 0;
  } else {
    upToTop.style.opacity = scrollingDocument.scrollTop > 300 ? 1 : 0;
    upToTop.style.opacity = 0.8;
  }
};
upToTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

//Banner
let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function () {
  nextImage();
}, 8000);

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }
  document.getElementById('radio' + count).checked = true;
}
function prevImage() {
  count--;
  if (count < 1) {
    count = 3;
  }
  document.getElementById('radio' + count).checked = true;
}

//Mascara
function mascara(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute('maxlength', '14');
  if (v.length == 3 || v.length == 7) i.value += '.';
  if (v.length == 11) i.value += '-';
}
