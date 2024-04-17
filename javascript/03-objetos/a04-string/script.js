// String

// str.length
/*
    Propriedade com o total de carcteres da string
*/

const fraseTeste = 'Uma frase de teste';
console.log(fraseTeste.length); // 18

// str.charAt(n)
/*
    Retorna o caracter de acordo com o index de (n)
*/

console.log(fraseTeste.charAt(2)); // a

// str.concat(str2, str3, ...)
/*
    Concatena as strings e retorna o resultado
*/

// str.includes(search, position)
/*
    Procura pela string exata dentro de outra string.
*/

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

// str.endswith(search) e str.startswith(search)
/*
    Procura pela string exata dentro de outra string.
*/
fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false

// str.slice(start, end)
/*
    Corta a string de acordo com os valores de start e end
*/

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
transacao1.slice(12); // cliente
transacao2.slice(0, 3); // Dep

// str.indexof(search) e str.lastindexof(search)
/*
    Retorna o primeiro index da string, no caso de lastIndexOf, retorna o último
*/

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6

// str.padstart(n, str) e str.padend(n, str)
/*
    Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n=10, passará a ter 10 caracteres
*/

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....

// str.repeat(n)
/*
    Repete a string (n) vezes
*/

const exemplo = 'Ta';

exemplo.repeat(5); // TaTaTaTaTa

// str.replace(regexp|substr, newstr|function)
/*
    Troca parte da string por outra. Podemosutilizar uma regular expression ou um valor direto(que irá trocar apenas o primeiro valor que encontrar)
*/

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

// str.split(padrao)
/*
    Divide a string de acordo com o padrão passado e retorna uma array
*/

const arrayItens = listaItens.split(' ');

// str.tolowercase() e str.touppercase()
/*
    Retorna uma string em letras maiúsculas ou minúsculas.
*/

// str.trim(), str.trimstart(), str.trimend()
/*
    Remove o espaço em branco do início ou final de uma string
*/

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'


// EXERCÍCIOS

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];


let somaTaxa = 0;
let somaRecebimento = 0;

transacoes.forEach((item) => {
    let valor = Number(item.valor.slice(3, (item.valor.length)));
    let descricao = item.descricao;
    if (descricao.startsWith('Taxa')) {
        somaTaxa += valor;
    } else {
        somaRecebimento += valor;
    }
})

console.log(`Soma das Taxas: ${somaTaxa}`);
console.log(`Soma dos Recebimentos: ${somaRecebimento}`);

// Retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transArray = transportes.split(';');
console.log(transArray);

// Substitua todos os span's por a's

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlArray = html.split('span');
const newHtml = htmlArray.join('a');
console.log(newHtml);

// Retorne o último caracter da frase

const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let quantidadeTaxas = 0;
transacoes2.forEach((item) => {
    let nome = (item.toLowerCase()).trim();
    if(nome.startsWith('taxa')) {
        quantidadeTaxas += 1;
    }
});

console.log(`Existem no total ${quantidadeTaxas} taxas`);