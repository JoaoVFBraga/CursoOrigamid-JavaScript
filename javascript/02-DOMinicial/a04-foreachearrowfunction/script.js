// forEach e Arrow Functions

// forEach
/* Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach. */

// Parâmetros do forEach 
/* O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array */

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

// forEach e Array
/* forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transforma-lo em uma array(Array.from(x)). */

// Arrow function
/* Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos. */

  imgs.forEach((item, index, array) => {
    console.log(item); // o item atual no loop
    console.log(index); // o número do index
    console.log(array); // a Array completa
  });

// Return
/* É possível omitir as chaves {} para uma função que retorna uma linha. Não é permitido fechar a linha com ; */

  imgs.forEach(item => 
    console.log(item)
  );
  
  imgs.forEach(item => console.log(item));


// Exercícios

// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach(function(item) {
    console.log(item);
})

// Mostre o texto dos parágrafos no console

paragrafos.forEach(item => console.log(item.innerText));

// Como corrigir os erros abaixo:

/*
imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);
*/

imgs.forEach((item, index) => {
    console.log(item, index);
  });
  
  let i = 0;
  imgs.forEach(() => {
    console.log(i++);
  });
  
  imgs.forEach(() => i++);