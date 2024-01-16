// Escopo

// Escopo da função
/* Variáveis declaradas dentro de funções não são acessadas fora das mesmas. */

// Váriavel global
/* Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro. */

// Escopo da função (pai)
/* Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções. */

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

// Escopo de bloco
/* Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco. */

if(true) {
    var carro2 = 'Fusca2';
    console.log(carro2);
  }
  console.log(carro2); // Fusca2

// Var vaza o bloco 
/* Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined. */

// Const
/* Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código. */

// Let
/* Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável. */


// Exercícios

// Por qual motivo o código abaixo retorna com erros?
/* 
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);
*/
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
/* 
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);
*/
function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    const dois = 2;
    return x / dois;
  }
  somarDois(4);
  dividirDois(6);

// O que fazer para total retornar 500?
/*
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
*/
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);