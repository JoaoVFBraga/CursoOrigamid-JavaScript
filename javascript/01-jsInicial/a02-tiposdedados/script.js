// Tipos de dados

// Todos são primitivos (imútaveis), exceto os objetos
var nome = 'João'; // String
var idade = 21; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// Verificar o tido de dado
console.log(typeof nome);

// Concatenação de strings
console.log(nome + ' tem ' + idade + ' anos.');

// Template String
console.log(`${nome} tem ${idade} anos.`);


// Exercícios

// Declare uma variável contendo uma string
var frase = 'Hello World!';

// Declare uma variável contendo um número dentro de uma string
var numString = '200';

// Declare uma variável com a sua idade
var idade2 = 21;

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var nome2 = 'João Victor';
var sobrenome = 'Furlan Braga';
console.log(nome2 + sobrenome);

// Coloque a seguinte frase em uma variável: It's time
var frase2 = "It's time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome2);