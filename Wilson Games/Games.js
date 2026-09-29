
const inputNome = document.querySelector('#input-nome');
const txtBoasVindas = document.querySelector('#mensagem-boas-vindas');
const btnComecar = document.querySelector('#butão1');
const contadorTexto = document.querySelector('#contador-tempo');
const alerta = document.querySelector('#alerta-temporizado');

btnComecar.disabled = true;

inputNome.addEventListener('input', () => {
    const nome = inputNome.value;
    if (nome.trim() !== '') {
        txtBoasVindas.innerText = `Seja bem-vindo, ${nome}!`;
        btnComecar.disabled = false; // Habilita o botão
    } else {
        txtBoasVindas.innerText = 'Digite seu nome para liberar o jogo:';
        btnComecar.disabled = true; // Desabilita o botão
    }
});

btnComecar.addEventListener('click', () => {
    alerta.style.display = 'block';
    setTimeout(() => {
        alerta.style.display = 'none';
        alert('O jogo começou!');
    }, 2000); // Exibe por 2 segundos antes de dar o alerta
});

let tempo = 0;
setInterval(() => {
    tempo++;
    contadorTexto.innerText = tempo;
}, 1000);