function calcularOValorTotalDosLivrosDisponiveis(livros) {

    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
        // O "reduce" irá retornar o valor acumulado
        // acc é o acumuçador
        // livro é o apelido para item atual do array
        // A função irá pegar o acumulador "acc" e somar com o preço do livro atual "livro.preco" 
        // ", 0" é o valor inicial, ele fica logo após a instrução
}


/* Método Reduce

    Link: Artigo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/