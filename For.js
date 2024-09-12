/*for(let i =0;     i < 10;    i++){ 
    console.log(i)
}*/

const numeros = [11, 15 ,18, 14, 12, 13]

function devolverMaiorNumero(array) {
  
    let maiorNumero = 0

    for(let i = 0; i < array.length; i++ ) {
        let numeroAtual = array[i]

        if(numeroAtual >= maiorNumero) {
            maiorNumero = numeroAtual 
        }
    }

    console.log("O maior número do array é",maiorNumero)
}

devolverMaiorNumero(numeros)