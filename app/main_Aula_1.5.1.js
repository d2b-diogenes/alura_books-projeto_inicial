let livros = []; 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const secaoLivros = document.getElementById('livros');

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() { 

    const res = await fetch(endpointDaAPI);

        livros = await res.json();

    //console.log(livros);
        //Acessei 1 item do Array
    //console.log(livros[0].titulo)
        //Acessei um item do objeto.

    criarSecaoLivros(livros);
        //Chamei a função para criar a Seção dos livros
    
}

//Será usado o "forEach()" para tornar menos verboso o código, pois ele irá executar a função "criarSecaoLivros" para cada elemento do Array
//Artigo - forEach(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//Fiz a parte do códgio que cria a Seção dos livros antes de ver a resolução do professor.

function criarSecaoLivros(livros) {

    livros.forEach( livro => {
        var divNova = document.createElement("div");
        divNova.classList.add('livro');
        
        var imagemLivro = document.createElement("img");
        imagemLivro.classList.add('livro__imagens');
        imagemLivro.src = livro.imagem;
        imagemLivro.alt = livro.alt;
        divNova.appendChild(imagemLivro);

        var tituloLivro = document.createElement("h2");
        tituloLivro.classList.add('livro__titulo');
        tituloLivro.innerHTML = livro.titulo;
        divNova.appendChild(tituloLivro);

        var descricaoLivro = document.createElement("p");
        descricaoLivro.classList.add('livro__descricao');
        descricaoLivro.innerHTML = livro.autor;
        divNova.appendChild(descricaoLivro);

        var precoLivro = document.createElement("p");
        precoLivro.classList.add('livro__preco');
        var preco = livro.preco.toFixed(2).toString().replace(".", ",");
        precoLivro.innerHTML = `R$ ${preco}`;
        divNova.appendChild(precoLivro);

        var tagsLivro = document.createElement("div");
        tagsLivro.classList.add('tags');
        var tagLivro = document.createElement("span");
        tagLivro.classList.add('tag');
        tagLivro.innerHTML = livro.categoria;
        tagsLivro.appendChild(tagLivro);
        divNova.appendChild(tagsLivro);


        secaoLivros.appendChild(divNova);

    })

}

// Muito feliz por ter conseguido criar sozinho essa parte do código que cria os livros

/* Links Usados:

forEach() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

forEach() : https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map?gclid=Cj0KCQjwn9CgBhDjARIsAD15h0A94_IkIrG0hvLrU0qg47OEY_mk1YTU-DEFyDImcIsmm5lUlVKL1WMaAq0IEALw_wcB

createElement() : https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement

Array : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
    //Como acessar a Array

Objetos : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
    //Como acessar o objeto

toString() : https://www.devmedia.com.br/forum/trocar-ponto-por-virgula-javascript/551468
    //Transformando Double para String para poder usar a função "replace()"

replace() : https://www.devmedia.com.br/forum/trocar-ponto-por-virgula-javascript/551468
    //Como alterar na String o ponto para vírgula

src da imagem : https://acervolima.com/como-criar-um-elemento-de-imagem-dinamicamente-usando-javascript/
    //Como adicionar na tag imagem o src da imagem

alt da imagem : https://acervolima.com/como-criar-um-elemento-de-imagem-dinamicamente-usando-javascript/
    //Como adicionar na tag imagem o alt da imagem

 */