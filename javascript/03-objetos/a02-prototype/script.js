// Prototype
/*
    A propriedade prototype é um objeto adicionado a função quando a mesma é criada. Ela é uma propriedade exclusiva de funções
*/

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
const andre = new Pessoa('André', 28);
console.log(Pessoa.prototype); // retorna o objeto

// FUNCAO.PROTOTYPE
/*
    É possível adicionar novas propriedades e métodos ao objeto prototype
*/

Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
}

// Acesso ao protótipo
/*
    O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo desse construtor
*/

andre.nome;
andre.idade;
andre.andar();

// PROTO
/*
    O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__.
*/

// Construtores Nativos
/*
    Objetos, funções, números, strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessados pelo tipo de dado
*/

// Método do objeto vs protótipo
/*
    Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo. Apenas os métodos do protótipo são herdados.
*/

Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);


// Exercícios

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const joao = new Pessoas('João', 'Braga', 21);