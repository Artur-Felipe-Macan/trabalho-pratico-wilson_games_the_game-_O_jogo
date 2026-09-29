
const btnDark = document.querySelector('#btn-darkmode');
const btnSom = document.querySelector('#btn-som');
const btnMusica = document.querySelector('#btn-musica');
const btnDificuldade = document.querySelector('#btn-dificuldade');
const btnVoltar = document.querySelector('#btn-voltar');
const body = document.querySelector('#body-config');


btnDark.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


btnSom.addEventListener('click', () => {
    if (btnSom.innerText === "Som: LIGADO") {
        btnSom.innerText = "Som: DESLIGADO";
    } else {
        btnSom.innerText = "Som: LIGADO";
    }
});

btnMusica.addEventListener('click', () => {
    if (btnMusica.innerText === "Música: LIGADA") {
        btnMusica.innerText = "Música: DESLIGADA";
    } else {
        btnMusica.innerText = "Música: LIGADA";
    }
});

btnDificuldade.addEventListener('click', () => {
    if (btnDificuldade.innerText === "Fácil") {
        btnDificuldade.innerText = "Médio";
    } else if (btnDificuldade.innerText === "Médio") {
        btnDificuldade.innerText = "Difícil";
    } else {
        btnDificuldade.innerText = "Fácil";
    }
});

// Botão de Voltar
btnVoltar.addEventListener('click', () => {
    window.location.href = 'Wilson.html';
});