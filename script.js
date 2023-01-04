const opcoes = document.querySelector('.opcoes');
const Navopcoes = document.querySelector('.nav-opcoes');

opcoes.addEventListener('click', () => {
    opcoes.classList.toggle('ativo');
    Navopcoes.classList.toggle('ativo');
})
