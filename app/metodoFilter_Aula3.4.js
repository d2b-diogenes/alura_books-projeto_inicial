// Aula 3.4 -  Essa foi o código que o professor fez para adicionar de uma vez em cada botão o evento do clique para que seja executado a função de filtrar

const botoes = document.querySelectorAll(".btn");
    // O professor usou o querySelectorAll para pegar todos os botões e adiconar na Array de Botões

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));
    //Foi adicionado em cada botão o evento listener para o evento do "click" 

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
        // O "this" representa o o elemento do contexto, o elemento capturado/trabalhado
        // A constante "elementoBtn" irá receber o "id" do elemento representado pelo "this" 
    const categoria = elementoBtn.value;
        // A constante "categoria" irá receber o valor "id" do elemento representado pelo "this"
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
        // A variável "livrosFiltrados" irá receber os livros que tiverem a categoria igual a categoria do botão clicado 
    console.table(livrosFiltrados);
        // Será exibido a tabela com as seleção de livros de acordo com a categoria do botão clicado
};