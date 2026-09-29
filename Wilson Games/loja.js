const btnEscudo = document.querySelector('#btn-escudo');
const btnEspada = document.querySelector('#btn-espada');
const btnPocao = document.querySelector('#btn-pocao');
const btnVoltar = document.querySelector('#btn-voltar-loja');
const imgItem = document.querySelector('#img-item');
const txtItem = document.querySelector('#txt-item');

btnEscudo.addEventListener('mouseover', () => {
    imgItem.src = 'imagens/escudo.jfif';
    imgItem.style.display = 'block'; // Exibe a imagem
    txtItem.innerText = 'Escudo de Cristais';
});
btnEscudo.addEventListener('mouseout', () => {
    imgItem.style.display = 'none'; // Esconde a imagem
    txtItem.innerText = 'Passe o mouse sobre um item!';
});

btnEspada.addEventListener('mouseover', () => {
    imgItem.src = 'imagens/espada.jfif';
    imgItem.style.display = 'block'; // Exibe a imagem
    txtItem.innerText = 'Espada de Cristais';
});
btnEspada.addEventListener('mouseout', () => {
    imgItem.style.display = 'none'; // Esconde a imagem
    txtItem.innerText = 'Passe o mouse sobre um item!';
});

btnPocao.addEventListener('mouseover', () => {
    imgItem.src = 'imagens/pocao.jfif';
    imgItem.style.display = 'block'; // Exibe a imagem
    txtItem.innerText = 'Poção de Vida';
});
btnPocao.addEventListener('mouseout', () => {
    imgItem.style.display = 'none'; // Esconde a imagem
    txtItem.innerText = 'Passe o mouse sobre um item!';
});

// Botão de Voltar
btnVoltar.addEventListener('click', () => {
    window.location.href = 'Wilson.html';
});