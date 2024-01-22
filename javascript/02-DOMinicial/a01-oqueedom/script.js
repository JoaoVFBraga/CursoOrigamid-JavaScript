// O que é DOM?

// Document Object Model (DOM)
/* É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos. */

console.log('window');
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

// Window e document
/* São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades. Window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades. */

// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); // Funciona

// NODE
/* Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node. */


// Exercício

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela 
console.log(window.innerWidth);

// Seleciona o primeiro elemento da página que possua a classe ativo
const ativoSelecionado = document.querySelector('.ativo');
console.log(ativoSelecionado.innerHTML);