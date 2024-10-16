// Seleciona o parágrafo e o botão usando getElementById
const meuParagrafo = document.getElementById("texto");
// No documento html, pegue o elemento que tem o id "meuBotao"

// Define a função que altera o conteúdo do parágrafo 
function alterarTexto() {
    // TextContend altera o conteúdo de texto d algum elemento html
    meuParagrafo,textContent = "O texto foi alterado !" ;
}
// Adiciona um event listener ao botão para escutar o clique
meuBotao.addEventListener("Click" , alterarTexto) ;

/* 
Click : Ocorre quando  o elemento é clicado.
DBLCLICK : Ocorre quando o elemento é clicado duas vezes.
MOUSEDOWN : Ocorre quando o botão do mouse é pressinado.
MOUSEUP : Ocorre quando o botão do mouse é solto.
MOUSEOVER : Ocorre quando o cursor do mouse passa sobre o elemento.
MOUSEOUT :  Ocorre quando o cursor do mouse sai de cima do elemento.
MOUSEMOVE : Ocorre quando o cursor do mouse é movido dentro do elemento.
*/

//Exercício 1:Adicione outro botão que mude a cor do parágrafo.Dica:Use meuParagrafo.style.color ="red" parapoder alterara cor de um elemento

//Exercício 2:Adicione outro botão que mude de cor de fundo dele mesmo quando clicado duas vezes 

//Exercício 3:Altere a função "alterarTexto" para que,todo vez que clicar,o texto altera entre "Clique aqui" e "O texto foi alterado!".DICA : Você vai ter que usar if e else para isso.