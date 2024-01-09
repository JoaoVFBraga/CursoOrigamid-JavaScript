// Números

var valor1 = 30;
var valor2 = 2000;
var pi = 3.14;
var exp = 2e10; // 2 com 10 zeros ao final

// Operadores aritméticos

var soma = 100 + 100;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

// Operadores aritméticos unários

var incremento = 10;
console.log(++incremento);

var decremento = 10;
console.log(--decremento);

// O "+" e "-" tentam transformar os valores em números, positivos ou negativos, respectivamente

var numero1 = '25';
console.log(+numero1);
console.log(-numero1);


// Exercícios
// Qual o resultado da seguinte expressão? 
var total = 10 + 5 * 2 / 2 + 20;
console.log(35);

// Crie duas expressões que retornem NaN
console.log('String' / 20);
var retornaNan = 'Retorna NaN'
console.log(+retornaNan);

// Somar a string '200' com o número 50 e retornar 250
var soma2 = +'200' + 50;
console.log(soma2);

// Incremente o número 5 e retorne o seu valor incrementado
var incrementoEx = 5;
incrementoEx++;
console.log(incrementoEx)

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade;