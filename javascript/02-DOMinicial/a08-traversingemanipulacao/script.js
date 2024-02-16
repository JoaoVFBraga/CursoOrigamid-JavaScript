// Traversing e Manipulação


// OuterHTML, InnerHTML e InnerText
/*
    Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas.
*/

const menu = document.querySelector('.menu');

menu.outerHTML; // Todo o HTML do elemento
menu.innerHTML; // HTML interno
menu.innerText; // Texto, sem tag


// Trasversing
/*
    Como navegar pelo DOM, utilizando suas propriedades e métodos.
*/

const lista = document.querySelector('.animais-lista');

lista.parentElement; // Elemento pai
lista.parentElement.parentElement; // Elemento pai do pai
lista.previousElementSibling; // Elemento acima
lista.nextElementSibling; // Elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // Primeiro filho
lista.children[--lista.children.length]; // Último filho


// Element VS Node
/*
    Element represeta um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais. Geralmente estamos atrás de um elemento e não de qualquer node em si.
*/

lista.previousElementSibling; // Elemento acima
lista.previousSibling; // Node acima

lista.firstChild; // Primeiro node child
lista.childNodes; // Todos os node child


// Manipulando elementos
/*
    É possível mover os elementos no dom com métodos de node.
*/

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('h1');

// contato.appendChild(lista); // Move a lista para o final de contato
// contato.insertBefore(lista, titulo); // Insere a lista antes de titulo
// contato.removeChild(titulo); // Remove o titulo de contato
// contato.replaceChild(lista, titulo); // Substitui titulo por lista


// Novos elementos

/*
    Podemos criar novos elementos com o método createElement()
*/

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo título';
novoH1.classList.add('titulo');


// Clonar elementos

/*
    Para clorar um elemento, basta utilizar o método cloneNode(), true sinaliza para incluir os filhos
*/

const cloneTitulo = titulo.cloneNode(true);



// Exercícios

// Duplique o menu e adicione ele em copy

const cloneMenu = menu.cloneNode(true);
const footer = document.querySelector('.footer');
const paragrafoFooter = footer.querySelector('p');
footer.insertBefore(cloneMenu, paragrafoFooter);


// Selecione o primeiro DT da dl de Faq

const faq1 = document.querySelector('.faq dl dt');

// Selecione o DD referente ao primeiro DT

const faq2 = document.querySelector('.faq dl dd');

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.descricao-animais');
const faq = document.querySelector('.faq')

faq.innerHTML = animais.innerHTML;


