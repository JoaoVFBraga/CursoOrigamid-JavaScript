// Arrays e Loops

// Array
/* É um grupo de valores, geralmente relacionados. Servem para guardarmos esses grupos de valores dentro de variáveis */

var videoGames = ['Switch', 'Ps4', 'Xbox'];

videoGames[0] // Switch
videoGames[2] // Xbox

// Métodos e propriedades de uma Array

videoGames.pop(); // Remove o último item e retorna-o
videoGames.push('3DS'); // Adiciona um item ao final do array
videoGames.length // Retorna o tamanho do array

// For loop
/* Faz algo repetidamente até que uma condição seja atingida */

for (let numero = 0; numero <= 10; numero = numero + 2){
    console.log(numero);
};
// for (numero inicial; condicao enquanto verdadeira continua executando, incremento)

// While loop

var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// Arrays e loops

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

// Break
/* O loop irá parar caso encontre o break */

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'Ps4') {
        break;
    }
}

// Foreach
/* forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like) */

videoGames.forEach(function(item) {
  console.log(item);
});

// Exercícios

// Crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002

var anosCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(var i = 0; i < anosCopa.length; i++) {
    console.log(`O brasil ganhou a copa de ${anosCopa[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if(frutas[i] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);