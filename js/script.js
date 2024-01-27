//header
const drop = document.querySelector('.dropdown');
const menu = document.getElementById('dropdown');
const ico = document.querySelector('.ico');

menu.onclick = () => {
    drop.classList.toggle('ativo');
    ico.classList.toggle('ativo');
}

//footer
const perguntas = document.querySelectorAll('.menu-f');
const icoFooter = document.querySelector('.ico-f');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  icoFooter.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);
console.log(icoFooter);




