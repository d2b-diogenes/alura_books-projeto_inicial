const secaoLivros = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function criarSecaoLivros(livros) {    

    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';

    secaoLivros.innerHTML = '';

        
    livros.forEach( livro => {

    //Criado na Aula 4.4 para verificar se a quantidade é 0 para que deixe o livro indisponível.
        // let disponibilidade = verificarDisponibilidadeDoLivro(livro);
              // Usando o IF - Primeira forma usado pelo professor para verificar a disponibilidade do livro

        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
            //Usando operador ternári para verificar a disponibilidade do livro

        secaoLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}"
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


/* Usando o IF - Primeira forma usada pelo professor para verificar a disponibilidade do livro
 function verificarDisponibilidadeDoLivro(livro) {
     //A função irá verificar a disponibilidade do livro

     if (livro.quantidade > 0) {
         return "livro__imagens";
             // Se a quantidade for maior que zero, o retorno será apenas a classe "livro__imagens"
     } else {
         return "livro__imagens indisponivel";
             // Se a quantidade for menor ou igual a zero, o retorno será a classe "livro__imagens indisponivel"
     }

}
*/

/* Usando o Operador Ternário - Segunda forma usada pelo professor para verificar a disponibilidade do livro
        
    let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
        // A variável irá receber um valor em casa de ser verdadeiro ou falso
        // até o símbolo "?" é a condição, a pergunta para a condição "livro.quantidade > 0" 
        // Se for verdadeiro, o retorno será o que antecede os dois pontos, "livro__imagens"
        // Se for falso, o retorno será o que vem depois dos dois pontos, "livro__imagens indisponivel"

        // Com apenas um linha de código foi possíve fazer essa verificação
*/