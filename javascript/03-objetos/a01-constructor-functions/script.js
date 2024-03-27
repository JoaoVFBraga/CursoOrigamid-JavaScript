// Constructor Functions

// Objetos 
/*
    Para criar um objeto, basta definirmos uma variável e iniciar a definição do seu valor com {}
*/

const carro = {
    marca: 'Marca',
    preco: 0,
  }

// Constructor Functions
/*
  As funções construtoras são responsaveis por criar obejtos a partir de um molde de outro objeto
*/

function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
  }

// New Keyword
/*
    A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela
*/

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;

// Parâmetros e argumentos
/*
  Podemos passar argumentos que serão utilizados no momento da criação do objeto
*/

function Produtos(nome, valor) {
    this.nome = nome;
    this.valor = valor;
}

const arroz = new Produtos('Arroz', 25);


// Exercícios

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(this.nome + ' andou');
//     }
//   }

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(nome + ' andou');
    }
}

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elementos) {
    const elementList = document.querySelectorAll(elementos);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((item) => {
            item.classList.add(classe);
        })
    };
    this.removeClass = function(classe) {
        elementList.forEach((item) => {
            item.classList.remove(classe);
        })
    }
}