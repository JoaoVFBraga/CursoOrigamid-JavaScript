// Dimensões e Distâncias

// Height e Width
/* Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são read only */

const section = document.querySelector('.animais-fantasticos');
section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

// offsetTop e offsetLeft

/* Distância entre o topo do elemento e o topo da página
section.offsetTop;
*/

/* Distância entre o canto esquerdo do elemento e o canto esquerdo da página
section.offsetLeft; 
*/

// getBoundingClientRect()

/* Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
*/

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// Window

window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.scrollY; // distância total do scroll vertical
window.scrollX; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// Matchmedia()

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}


// Exercícios

// Verifique a distância da primeira imagem em relação ao topo da página

const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
        soma = soma + imagem.offsetWidth;
    })
    console.log(soma);
}

window.onload = function() {
    somaImagens();
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach((link) => {
    const larguraLink = link.offsetWidth;
    const alturaLink = link.offsetHeight;
    if ((larguraLink >= 48) && (alturaLink >= 48)) {
        console.log(link, 'possui acessibilidade')
    } else {
        console.log(link, 'não possui acessibilidade')
    }
})


// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');
const tamanhoBrowser = window.outerWidth;

if (tamanhoBrowser < 720) {
    menu.classList.add('menu-mobile');
}
