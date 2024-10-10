// objetos são coleções 
// declaração de um objeto :


let pesssoa = {
    nome : " Letícia" ,
    sobrenome : "Moreira" ,
    idade : 17 ,
    altura : 1.61
}

// aqui eu imprimo o objeto todo :
console.log(pesssoa)
console.log(pessoa.nome, pessoa.sobrenome)
console.log(pessoa["nome"],pessoa["sobrenome"])

//assim eu altero o valor de uma propriedade no meu objeto
pessoa.nome = "Arthur"
console.log(pessoa.nome)
pessoa.idade = 15
dormir: function () {
    console.log(`${pessoa.nome} está dormindo.Rooooooonc! `)
}
console.log(pessoa.idade)

//assim eu adiciono uma nova propriedade no meu objeto

pessoa.peso = 40
console.log(pessoa)

pessoa.dormir()

//assim eu adiciono uma nova função (que também chamamos de método)ao nosso objeto
pessoa.comer = function () {
    console.log(`${pessoa.nome} está com fome. hora de lanchar.`)
}
pessoa.comer()