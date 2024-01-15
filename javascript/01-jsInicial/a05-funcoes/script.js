// Funções
/* As funções são blocos de códigos que podem ser executados e reutilizados. Para executar uma função usa-se parênteses. */

function areaQuadrado(lado) {
    return lado * lado;
  }
  
  areaQuadrado(4) // 16
  areaQuadrado(5) // 25
  areaQuadrado(2) // 4

// Parâmetros e argumentos
/* Ao criar uma função, você pode definir parâmetros, ao executar uma função, você pode passar argumentos. */

// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}
  
imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

// Argumentos como funções
/* Chamadas de Callback, geralmente são funções que ocorrem após algum evento. Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {} */

// addEventListener('click', function() {
//     console.log('Clicou');
//   });

// Retorno de dados
/* Uma função pode retornar qualquer tipo de dado e até outras funções. Quando não definimos o return, ela irá retornar undefined. */

// Escopo 
/* Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele. */

// function precisoVisitar(paisesVisitados) {
//     var totalPaises = 193;
//     return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
//   }
//   console.log(totalPaises); // erro, totalPaises não definido

// Escopo Léxico
/* Funções conseguem acessar variáveis que foram criadas no contexto pai */

// var profissao = 'Designer';

// function dados() {
//   var nome = 'André';
//   var idade = 28;
//   function outrosDados() {
//     var endereco = 'Rio de Janeiro';
//     var idade = 29;
//     return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//   }
//   return outrosDados();
// }

// dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

// Hoisting
/* Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória */


// Exercícios

// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(argumento) {
  if(argumento) {
    console.log('O valor é Truthy')
  } else {
    console.log('O valor é False')
  }
}

verificaTruthy('');

// Crie uma função matemática que retorne o perímetro de um quadrado

function calculaPerimetro(medidaDeUmLado) {
  var perimetro = medidaDeUmLado * 4
  console.log(`O perímetro do quadrado é ${perimetro}`)
}

calculaPerimetro(4);

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  console.log(nome + " " + sobrenome);
}

nomeCompleto('João', 'Braga');

// Crie uma função que verifica se um número é par

function verificaPar(numeroEscolhido) {
  var resto = numeroEscolhido % 2;
  if(!resto) {
    console.log('O número é par')
  } else {
    console.log('O número é impar')
  }
}

verificaPar(3);

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function verificaDado(dado) {
  var tipoDoDado = typeof dado
  return tipoDoDado;
}

console.log(verificaDado('Teste'));

// addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log('João Braga');
})