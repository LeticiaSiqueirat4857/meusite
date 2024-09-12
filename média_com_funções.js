function mediaAlunos(n1,n2,n3,n4){
    let media = (n1+n2+n3+n4)/4
    return 'Sua média é' , media
}
// Calculando a média os alunos

let notasPatrick = mediaAlunos(3,5,8,10)
console.log("A média do Patrick é :" , notasPatrick)

let notasJurema = mediaAlunos(8,7,9,9)
console.log("A media da Jurema é :" , notasJurema) 

function funcaoPrimeiroGrau(a,b,x){
    return a*x+b
}

// Usando a função

a = 2
b = 3
x = 5

resultado = funcaoPrimeiroGrau(a,b,x)
console.log("O resultado é: " , resultado)