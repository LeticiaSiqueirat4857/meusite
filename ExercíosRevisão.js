/* exercício 1 - LOOP WHILE e CONDICIONAIS 
crie um loop while que fará uma contagem de 10 a 0.
quando chegar a zero , o loop PARA e imprime a mensagem "BOOOM!" 
antes disso , se a contagem for par, imprime "TIC"
se a contagem for ímpar, imprime "TAC" */

let segundo = 10 

while (segundo > 10) {
    if (segundo === 0) {
        console.log("BOOOM!")

    } else if (segundo % 2 === 0) {
        console.log("TIC")

    } else {
     console.log("TAC")
    }
    segundo--;
}

// exercício 2 - crie uma função que recebe como parâmetros um número e imprime toda a tabuada dele. use for (contando a de 1 a 10)para isso.

function imprimirTabuada (numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
imprimirTabuada(10);