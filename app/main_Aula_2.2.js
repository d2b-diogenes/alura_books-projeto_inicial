let livros = []; 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const secaoLivros = document.getElementById('livros');

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() { 

    const res = await fetch(endpointDaAPI);

        livros = await res.json();

    criarSecaoLivros(livros);
    
}

function criarSecaoLivros(livros) {

    livros.forEach( livro => {
        
        secaoLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}"
                    alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2).toString().replace(".",",")}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `

    })

}

/*
Usando o MAP para aplicar desconto em todos os livros

    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    The diference between map() and forEach() is, map() doesn't change the original Array and normally return a result.

 Array / Map : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */