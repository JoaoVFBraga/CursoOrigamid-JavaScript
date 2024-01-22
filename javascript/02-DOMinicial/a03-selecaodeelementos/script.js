// Seleção de elementos

// getElementBy
/* Pode ser usado para selecionar id(getElementById), classes(getElementByClassName), e tags(getElementByTagName). Selecionam e retornam uma lista de elementos do DOM (HTMLCollection). A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada. */

// Seletor geral único
/* querySelector retorna o primeiro elemento que combinar com seu seletor CSS */

const animais = document.querySelector('.animais');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');

// Seletor geral lista
/* querySelectorAll retornar todos os elementos compatíveis com o seletor CSS em uma NodeList */

const titulos = document.querySelectorAll('.titulo');

// HTMLCollection vs Nodelist
/* A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática. */

// Array-like
/* HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList. É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection) */


// Exercícios

// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const iniciaImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(iniciaImagem);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .descricao-animais

const descricaoAnimais = document.querySelector('.descricao-animais');
const primeiroh2 = descricaoAnimais.querySelector('h2');
console.log(primeiroh2);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
const ultimoParagrafo = paragrafos[--paragrafos.length];
console.log(ultimoParagrafo);