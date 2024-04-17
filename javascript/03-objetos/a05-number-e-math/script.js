// Number e Math

// Number
/*
    É a construtora de números, todo número possui as propriedades e métodos do prototype de Number.
*/

// Number.isNaN() e Number.isInteger()
/*
    isNan verifica se o número é um NaN, e isInteger verifica se é um número inteiro
*/

Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false
Number.isInteger(20); // true
Number.isInteger(23.6); // false

// Number.parseFloat() e number.parseInt()
/*
    parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.
*/

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

// n.toFixed(decimais)
/*
    Arredonda o número com base no total de casas decimais do argumento
*/

const preco = 2.99;
preco.toFixed(); // 3

// n.toLocaleString(lang, options)
/*
    Formata o número de acordo com a língua e opções passadas
*/

const preco2 = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

// Math
/*
    É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.
*/

Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303

// Math.abs(), Math.ceil(), Math.floor(), Math.round()
/*
    abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.
*/

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

// Math.max, Math.min(), Math.random()
/*
    max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.
*/

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
// Math.floor(Math.random() * (max - min + 1)) + min;


// EXERCÍCIOS

// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));

// Retorne o maior número da lista abaixo

const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(', ');
console.log(Math.max(...numerosArray));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let somaTotal = 0;
listaPrecos.forEach((item) => {
    somaTotal += limparPreco(item);
})
console.log(somaTotal);

limparPreco(listaPrecos[1]);