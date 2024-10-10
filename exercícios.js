// Exercício :
let carro = {
    marca : " Dodge Challenger " ,
    modelo : " Hellcat " , 
    cor : " Preta " ,
    andar: function () {
        console.log(`A ${carro.marca} ${carro.modelo} está andando.`)
    },
    buzinar: function () {
        console.log(`A ${carro.marca} ${carro.modelo} está buzinando.`)
    }
}

carro.andar ()
carro.buzinar ()

carro.marca = " Dodge "
carro.modelo = " SRT "