let livros = []; 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() { 

    const res = await fetch(endpointDaAPI);

    livros = await res.json();

    console.log(livros);

    let livrosComDesconto = aplicarDesconto(livros);
        // A variável irá chamar o função "aplicaDesconto" que irá levar no parâmetro o a Array original com a lista de livros que será utilizada para aplicar os descontos nos preços
        // A variável irá receber a nova Array com todos os elementos, mas com os novos preços.
        
    criarSecaoLivros(livrosComDesconto);
        // A função "criarSecaoLivros" agora irá levar no seu parâmetro a nova Array com os descontos aplicados nos preços dos livros
    
}


/*
Usando o MAP para aplicar desconto em todos os livros

    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    The diference between map() and forEach() is, map() doesn't change the original Array and normally return a result.

 Array / Map : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */