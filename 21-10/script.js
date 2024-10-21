// Obtém o contexto 2D do canvas, que permite desenhar nele
const ctx = canvas.getContext("2d") ;
// Define o tamanho de cada quadrado (para a cobra e a comida)
const box = 20 ;
// Inicializa a cobra como um array com um segmento na posição (100,100)
let snake = [{x: box * 5, y: box * 5}]
//Define a direção inicial da cobra como  "RIGTH !"
let direction = "RIGTH !"
// Gera a posição inicial da comida aleatóriamente dentro do canvas 
let food ={
    x: Math.floor (Math.random ()* 20) * box
    y: Math.floor(Math.random () *20 *box )
}
document.addEventListener("keydown" , changeDirection) ;

// Função para mudar a direçãoda cobra com base na tecla preecinada 
function changeDirection(event) {
// Verifica se a tecla pressionada é a seta esquerda e se adirção não é "RIGTH"
if (event.keyCode === 37 && direction !== "RIGTH") {direction = "left"} ;
// Verifica se a tecla pressionada é seta para cima e se a direção não é "DOWN"
IF (EVENT.keyCode === 38 && direction !== "DOWN") {direction = "UP"} ;
}










