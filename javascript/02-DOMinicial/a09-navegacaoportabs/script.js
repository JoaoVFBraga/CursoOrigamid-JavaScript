const jsimg = document.querySelectorAll('.jsimg li');
const jsconteudo = document.querySelectorAll('.jsconteudo section');

function adicionaClasse(index) {
    jsconteudo.forEach((conteudo) => {
        conteudo.classList.remove('ativo');
    })
    jsconteudo[index].classList.add('ativo');
}

jsimg.forEach((item, index) => {
    item.addEventListener('click', function(){
        adicionaClasse(index);
    })
})