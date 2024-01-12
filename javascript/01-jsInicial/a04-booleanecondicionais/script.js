// Boolean e Condicionais

// Valores Booleanos
/* Existem dois valores booleanos: true e false */

var nomeFelipe = false;
var nomeJoao = true;

// Condicionais If e else
/* Verifica se uma expressão é verdadeira com if, caso contrário executa o else */

if(nomeJoao) {
    console.log('Seu nome é João.');
} else {
    console.log('Seu nome não é João.');
}

// Condicional Else if
/* Se o if não for verdadeiro, verifica o else if */

if(nomeJoao) {
    console.log('Seu nome é João.');
} else if (nomeFelipe){
    console.log('Seu nome é Felipe.');
} else {
    console.log('Seu nome não é felipe nem João.');
}

// Switch
/* Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira. */

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

// Valores Truthy
/* São valores avaliados como true pelo JS, uma string, um number, um objeto. */

if(true);
if(1);
if(' ');
if('andre');
if(-5);
if({});

// Valores Falsy
/* São avaliados como false pelo JS, uma string vazia, o número 0, null, undefined, NaN. */

if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``

// Operador de negação (!)
/* Ele nega uma operação booleana, ou seja, troca o valor da mesma, se era true, vira false, e se era false, vira true. Obs.: Você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy. */

if(!true); // false
if(!1); // false
if(!''); // true
if(!undefined); // true
if(!!' '); // true
if(!!''); // false

// Operadores de comparação
/* O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===. */

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false
10 !== '10'; // true

// Operador lógico &&
/* Compara se uma expressão E a outra são verdadeiras. Se ambos os valores forem true ele irá retornar o último valor verificado, se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos. */

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Operador lógico ||
/* Compara se uma expressão OU outra é verdadeira. Retorna o primeiro valor true que encontrar. */


// Exercícios

// Verifique se a sua idade é maior do que a de algum parente, dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 21;
var idadeParente = 30;

if(minhaIdade === idadeParente) {
    console.log('É igual')
} else if (minhaIdade > idadeParente){
    console.log('É maior')
} else {
    console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //False
var empregoFuturo; //False
var dinheiroNaConta = 0; //False

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil > china) {
  console.log('O Brasil possui mais habitantes.')
} else {
  console.log('A china possui mais habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
  } else {
    console.log('Falso');
  }
// Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
  } else {
    console.log('Falso');
  }
// Cão
