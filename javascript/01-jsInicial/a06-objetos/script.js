// Objetos
/* São conjuntos de variáveis (propriedades) e funções (métodos) */

var pessoa = {
    nome: 'João Braga',
    idade: 21,
    profissao: 'Programador',
    possuiFaculdade: true,
}

pessoa.nome // João Braga
pessoa.possuiFaculdade // true

// Métodos
/* São propriedades com uma função no lugar dos seus valores */

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// Dot Notation Get
/* É possivel acessar as propriedades de um objeto usando o ponto "." */

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

var bg = menu.backgroundColor;

// Dot Notation Set
/* Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma. */

menu.backgroundColor = '#000';

// Adicionar propriedades e métodos
/* Basta adicionar um novo nome e definir o valor */

menu.position = 'fixed';

// Palavra-chave this
/* O "this" é usado para fazer referência ao próprio objeto */

var conta = {
    valorInicial: 300,
    subtracao(valor) {
        return this.valorInicial - valor;
    },
}


// Exercícios
// Crie um objeto com os seus dados pessoais, deve possuir pelo menos duas propriedades nome e sobrenome

var nome = {
    nome: 'João Victor',
    sobrenome: 'Furlan Braga',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

nome.mostrarNome = function() {
    return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Latido'
        } else {
            return 'Nada'
        }
    },
}