function iniciaTab() {
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
}
iniciaTab();

function iniciaDT() {
    const faqDT = document.querySelectorAll('.faq dt');

    function adicionaAtivo() {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }
    
    faqDT.forEach((item) => {
        item.addEventListener('click', adicionaAtivo)
    })
}
iniciaDT();