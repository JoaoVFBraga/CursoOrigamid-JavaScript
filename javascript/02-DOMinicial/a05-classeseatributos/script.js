// Classes e Atributos

// Classlist
/* Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém. */

const menu1 = document.querySelector('.menu');
menu1.className; // String
menu1.classList; // Lista de classes
menu1.classList.add('ativo'); // Adiciona a classe
menu1.classList.remove('ativo'); // Remove a classe
menu1.classList.toggle('ativo'); // Adiciona/remove a classe
menu1.classList.contains('ativo'); // Verifica se contém
menu1.classList.replace('ativo', 'inativo'); // Troca a classe

// Attributes
/* Retorna uma array-like com os atributos do elemento */

const animais = document.querySelector('.animais-fantasticos');
animais.attributes; // Retorna todos os elementos
animais.attributes[0]; // Retorna o primeiro atributo

// GetAttribute e SetAttribute
/* Métodos que retornam ou definem de acordo com o atributo selecionado */

const img1 = document.querySelector('img');
img1.getAttribute('src'); // Retorna o valor do atributo
img1.setAttribute('alt', 'Raposa'); // Define o atributo
img1.hasAttribute('src'); // Verifica se existe o atributo
img1.removeAttribute('alt'); // Remove o atributo

// Read Only vs Writable
/* Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura. */


// Exercícios 

// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu li');
menu.forEach ((item) => {
    item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach ((item) => {
    item.classList.remove('ativo');
})
menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll('img');
img.forEach((item, index) => {
    if (item.hasAttribute('alt')) {
        console.log(`A imagem no index ${index} possui o atributo alt`);
    } else {
        console.log(`A imagem no index ${index} não possui o atributo alt`);
    }
})

// Modifique o href do link externo no menu

const hrefExterno = document.querySelector('.menuul li:last-child a');
hrefExterno.setAttribute('href', 'www');

