// Alterando elementos

//assim pegamos um elementopelo ID

const meuTitulo =  document.getElementById("titulo")

const meuSubtitulo = document.getElementsByClassName("subtitulo") // pega todos os elemenos da classe (é um array)

const subtitulo  = document.querySelector(".subtitulo")// pega o primeio elemento que ele achar com classe

subtitulo.style.color = "blue"

const subtitulo2 = document.querySelectorAll(".subtitulo") // pega todos os elementos da classe (é um array). é parecido com getElementByClassName

subtitulo2[2].style.color = "orange"



/* for (let i = 0 ; i < meuSubtitulo.length ; i++) {
    meuSubtitulo[i].style.color = "red"
}
*/ 




meuTitulo.style.color = "black"

//meuTitulo.textContent = "olá"

meuTitulo.innerText = "oi carlinhos"

//Criando elementos novos

const novoParagrafo = document.createElement("p") // createElement significa criar elemento 

novoParagrafo.textContent = "este é um novo texto"

document.body.appendChild (novoParagrafo) 
// appenChild significa adicine um filho. Aqui eu estou dizendo : dentro do documento HTML , lá em body , adicione o novo paragafo que criei .

// Remover elemento 

const paragafoRemover = document.getElementById("remover")

paragafoRemover.remove() //Remove significa remover , e emove o elemento da pagina
















