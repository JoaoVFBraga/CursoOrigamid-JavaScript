// Eventos

// addEventListener
/* Adiciona uma função ao elemento, esta chamada da callback, que será ativada assim que certo evento ocorrer neste elemento */

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
    console.log('Clicou');
})

// Callback
/* É uma boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima */

// Event
/* O primeiro parâmetro do callback é referente ao evento que ocorreu */

function callback(e) {
    console.log('Clicou na imagem', e);
}

img.addEventListener('click', callback);

// Propriedades do event

function executarCallback(e) {
    const currentTarget = e.currentTarget; // this
    const target = e.target; // onde o clique ocorreu
    const type = e.type; // tipo de evento
    const path = e.path;
    console.log(currentTarget, target, type, path);
  }

img.addEventListener('click', executarCallback);

// event.preventDefault()
/* Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado */

function clickNoLink(e) {
    e.preventDefault();
}

// This
/* A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado. */

// Diferentes eventos
/* Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também. */

// Keyboard
/* Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard. */

function handleKeyboard(event) {
    if(event.key === 'a')
      document.body.classList.toggle('azul');
    else if(event.key === 'v')
      document.body.classList.toggle('vermelho');
  }

// For each e eventos
/* O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles. */


// Exercícios

// Quando o usuário clicar nos links internos do site adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function clicou(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  })
  this.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', clicou);
})

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function funcaoElementos(event) {
  console.log(event.target);
}

todosElementos.forEach((item) => {
  item.addEventListener('click', funcaoElementos);
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const html = document.querySelector('html');

function teclaT(event) {
  if (event.key === 't') {
    html.classList.toggle('textoGrande');
  }
}

window.addEventListener('keydown', teclaT);
