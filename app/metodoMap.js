function aplicarDesconto(livros) {

    const desconto = 0.3;

    livrosComDesconto = livros.map( livro => {

        return {...livro, preco: livro.preco - (livro.preco * desconto)}
            // "..." É um operador especial do JS que copia as informações do objeto e copia para um novo objeto, mudando apenas onde for determiado  
            // O que vem depois da vírgula "...livro, " é o que será mudado na cópia.
            //Do objeto, o item "preco" irá receber essa nova informação
    })

    return livrosComDesconto;
        //Irá retorna o valor na nova Array com o desconto aplicado nos preços

}