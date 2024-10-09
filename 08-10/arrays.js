let listaDeCompras = ["banana","salada","brinquedo","pão","massa","leite"]
console.log(listaDeCompras)
console.log(listaDeCompras[6])

// exercício
// crie uma lista que pode ser de : jogos,filmes,séries,anime/desenho /*
 // a lista deve ter pelo menos 5 itens
 // acesse o primeiro, do meio e o último usando console.log (nomeDoArray[x])

 let Livros = ["Dark romance","Romance","Terror"]
 console.log(Livros[0])
 console.log(Livros[1])
 console.log(Livros[2]) 

 // método para inserir itens no Array
 let Compras = ["pão","margarina","leite"]
 console.log(Compras)

 Compras.push("balinha")
 console.log(Compras)

 Compras.push("alface")
 console.log(Compras)

 // no Array no exercício anterior,adicione mais dois itens usando push 
 // imprima o Array inteiro no console.log

 let Sanduíche = ["pão","frango","molho"]
 console.log(Sanduíche)

 Compras.push("tomate")
 console.log(Sanduíche)

 Sanduíche.pop()

 Compras.push("alface")
 console.log(Sanduíche)





let esportes = [5,60,80,100,200,88,45,23,30]
console.log(esportes.length)

for (let i =0; i < esportes.length; i++) {
    console.log(esportes[i])
}

/* 
crie um Array com alguns números.
use uma variável chamada soma (Dica: let soma = 0)
use um loop for para calcular a soma dos números (Dica: a cada volta,adicione á variávl soma cada 
item do Array)
após obter a soma total,calcule a média (soma/pelo número de itens do Array)
exiba a soma e a média. */

let números = [6,80,160,0,88,45,30]
let soma = 0

for (let i =0; i < números.length; i++) {
    soma += números[i]
    console.log('${soma}')
}
let média = soma / números.length 
console.log(`a soma é ${soma}, e temos${números.length} números na lista. portanto, a média é ${média}.`)
