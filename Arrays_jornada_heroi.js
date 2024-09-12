// Inventario inicial do heroi
let inventario=  ["Espada de adamantio", "escudo de titanium", "3 poções de regeneração" , "cajado magico" ,
"armadura de couro"]
// Exibindo o inventario inicial
console.log("Seu inventario inicial: ", inventario)

let novoItem = "ovo de dragão"
inventario.push(novoItem);
/*3 Encontrando um Tesouro :
"O heroi encontra um bau de tesouro e ganha um novo item!"*/

console.log("Você encontrou um baú! Novo item adicionado ao seu inventario: ", inventario);

console.log("Um goblin apareceu! Prepare-se para a batalha.");

 let itemUsado = inventario [0] ; // Usando a espada (primeiro item)
 console.log("Você ataca o goblin com sua", itemUsado ) ;

 /* 6. finalizando o inimigo
 "em um golpe o goblin sentiu o impacto, é a sua hora de finaliza-lo"
 */
let itemUsado3 = inventario[3] ;
console.log("Você finaliza o goblin com seu" , itemUsado3) ;

// Finalizando a batalha
console.log("Você derrotou o goblin e continua sua jonada.") ;