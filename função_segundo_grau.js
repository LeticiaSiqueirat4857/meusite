function resolverEquacaoSegundoGrau(a,b,c){
    //Passo 1: vamos calcular o delta
    let delta = b*b-4*a*c

    // Passo 2: verificar se o delta é zero, negativo ou positivo
    if (delta<0){
        // Se o delta for negaivo, a equação não tem raizes reais
        console.log("A equação não tem reizes reais")
    }
else if (delta===0) {
    // Se delta for igual a zero, a equação tem duas raizes iguais
    console.log("A equação em raizes iguais.")
}
else {
    // Se o elta for posiivo, a equaçao tem duas raizes diferentes
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)

    console.log("A equação tem duas raizes reais:, x1= " ,x1, "e x2= " ,x2)
}


}
resolverEquacaoSegundoGrau(1, -3, 2)
resolverEquacaoSegundoGrau(16, -7, 3)
resolverEquacaoSegundoGrau(9, -4, 14)