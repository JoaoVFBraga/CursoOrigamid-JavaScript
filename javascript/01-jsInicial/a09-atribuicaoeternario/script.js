// Atribuição e Ternário

// Operadores de atribuição
/* Podemos usar operadores de atribuição para abreviar uma variável */

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Operador ternário
/* São abreviações de condicionais com if e else, gerlamente utilizados quando precisamos atribuir um valor para uma variável, dependendo de uma condição */

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// condição ? true : false


// Exercícios

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll -= 500;
console.log(scroll);

// Atribua true para a variável darCredito, caso o cliente possua carro e casa, e false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? 'Crédito aprovado' : 'Crédito não aprovado';
console.log(darCredito);