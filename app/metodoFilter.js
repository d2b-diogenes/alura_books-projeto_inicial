//3.5 Apresentando na tela os livros filtrados na tela 

const botoes = document.querySelectorAll(".btn");
   
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));
    
function filtrarLivros() {

    const elementoBtn = document.getElementById(this.id);
        
    const categoria = elementoBtn.value;
        
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
        // Aula 4.5, adicionando a função do botão para mostrar apenas os livros disponíves
        // A variável "livrosFiltrados" a lista dos livros dispóniveis apenas ou das categorias
        // A condição ternária irá verificar se o botão clicado é o da categoria "disponível"
        // Se verdadeiro, irá trazer apenas os livros com a quantidade superior a 0
        // Se falso, irá retornar os livros de acordo com a categoria do botão clicado

    criarSecaoLivros(livrosFiltrados);
        //Chama a função que cria a seção de livros, mas agora levanto a lista com o filtro aplicado.

    if (categoria == 'disponivel') {

        const valorTotal = calcularOValorTotalDosLivrosDisponiveis(livrosFiltrados);
            //A constante irá receber o resultado de uma função, que será o valor total dos livros disponíveis

        exibirOValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
};

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirOValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
            </div>
        `
}


/*
//Aula 5.2 criando o HTML da página

const botoes = document.querySelectorAll(".btn");
   
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));
    
function filtrarLivros() {

    const elementoBtn = document.getElementById(this.id);
        
    const categoria = elementoBtn.value;
        
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);

    criarSecaoLivros(livrosFiltrados);

    if (categoria == 'disponivel') {
        elementoComValorTotalDeLivrosDisponiveis.innerHtml = `
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
            </div>
        `
    }
};
*/