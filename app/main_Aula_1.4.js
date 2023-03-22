let livros = []; //Uma Array vazia para 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI(); //para fazer a requisição para de fato ir buscar os livros da API

async function getBuscarLivrosDaAPI() { //É utilizado a função assincrona, pois o retorno da função pode demorar. A função assincrona irá esperar o retorno sem interromper o carregamento das demais coisas da página
    
    const res = await fetch(endpointDaAPI); // "await" indica para a função esperar uma promessa, promessa de receber todos os livros. 
        //"fetch" é uma API utilizada para requisições usando URL. O "fetch" vai fazer a requisição para "endpoint"
    
        livros = await res.json(); // "livros" irá receber a resposta convertida em JSON.
            // É necessário usar o "await" para que a função espere uma promessa, que será a resposta convertida para JSON.

    // console.log(livros);
    console.table(livros); // Outra forma de ver o resultado, o resultado retornará como uma tabela
}