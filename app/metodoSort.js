let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdernarPorPreco.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco() {

    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
        // A variável "livrosOrdenados" irá receber o resultado do "sort()"
        // Os livros serão ordenados pela função dentro da função "sort()"
        // Essa função irá pegar cada elemento do ARRAY e irá comparar o preço do elemento A e o preço do Elemento B para que fiquem na Ordem Crescente

    criarSecaoLivros(livrosOrdenados);
}


/* Método sort

arr.sort( )

Quando é feito apenas o arr.sort() a ordenação não é estável, pois o arrau é ordenado de acordo com a pontuação de código UNICODE de cada caracteres,
mas é possível passar uma função de comparadação dentro da função "sort()", para que essa ordenação passe a ser estável.

arr.sort([função de comparação])

Ordem Crescente "a - b"
Ordem Decrescente "b - a"

Link: Artigo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/