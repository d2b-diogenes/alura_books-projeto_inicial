let livros = []; 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const secaoLivros = document.getElementById('livros');


getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() { 

    const res = await fetch(endpointDaAPI);

        livros = await res.json();

    console.log(livros);
        //Acessei 1 item do Array
    //console.log(livros[0].titulo)
        //Acessei um item do objeto.

    criarSecaoLivros(livros);
        //Chamei a função para criar a Seção dos livros
    
}

//Será usado o "forEach()" para tornar menos verboso o código, pois ele irá executar a função "criarSecaoLivros" para cada elemento do Array
//Artigo - forEach(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// A forma como professor fez na aula:

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

        //Atenção ao usar "forEach()" junto como o innerHTML para adicionar de forma recursiva, pois tem que colocar o " += "" para que ADICIONE o novo elemento ao anterior

    })

}