let idade = 20 
let temCarteira = true
if (idade>= 18 && temCarteira === true) {
    console.log("Você tem idade para dirigir e tem carteira.")
} else if (idade>=18) {
    console.log("Você até tem idade para dirigir,ma não tem carteira.Chame uber.")
} else {
    console.log("Você não pode dirigir.")
}
 
/* depois do meio dia, é tarde 
depois das 18, é noite 
depois da meia noite, é madrugada 
a partir das 6, é manhã
crie uma variável que recebe a hora (exemplo:18,8,19)
crie um código usando condicionais que mostrem se é manhã, se é tarde, se é noite, se é madrugada */
 
if hora = 6
if (hora > 6 && < 12) {
    console.log("é de manhã. Hora de tomar café")
} else if (hora >= 12 && hora < 18) {
    console.log("é de tarde. Hora de ir ao colégio")
} else if (hora >= 18 && hora <=23) {
    console.log ("é de noite. Hora de dormir")
} else {
    console.log ("é de madrugada")
}




// loops ou laços são estruturas de código qu se repetem até que condição seja falsa 
// while 
let voltas = 0 
// enquanto o ciclista não completar 10 voltas , ele tem que continuar pedalando 
while (voltas < 10) {
    console.log('pedale, você já deu ${voltas} voltas.')
    // isso incrementa voltas em 1
    voltas ++ //voltas += 1 ou então voltas = voltas + 1
}
 console.log ("você ganhou a corrida")
 //for significa para 
 for (let voltas1 = 0; voltas1 < 10 ; ++ ) {
    console.log("você já deu ${voltas1}.")
 }
console.log("parabéns")