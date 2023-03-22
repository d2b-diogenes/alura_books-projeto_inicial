/* Aula 3.3 -  Essa foi o código que o professor fez para pegar elemento a elemento
        const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
            //criando uma constante para receber o elemento botão do documento HTML

        btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);
            //Adicionando ao botão uma função que será executado quando ocorrer o evento clicar.

        function filtrarLivrosDeFront() {
            let livrosFiltrados = livros.filter(livro => livro.categoria == "front-end");
                console.table(livrosFiltrados);
        }
*/

// Código que fiz depois da aula 3.3, onde eu faço um código para adicionar de uma vez em cada botão o evento do clique para que seja executado a função de filtrar

const btnFiltrar = document.querySelectorAll(".btn");
    //Usei o "querySelectorAll" para pegar todos os botões que tem a classe ".btn".

console.log(btnFiltrar[0]);
    //Verificando a busca do Array criado para todos os botões 

btnFiltrar.forEach(btn => {
        //para cada botão será criado o evento "addEventListener" para o evento "click"
    btn.addEventListener('click', () => { 
        
        let livrosFiltrados = livros.filter(livro => livro.categoria == btn.value);
            //Ao clicar será feito o filtro com o "filter" para que na constante receba os livros que tenham a categoria igual ao valor do botão acionado, "btn.value"
        console.table(livrosFiltrados);
    
    });
})