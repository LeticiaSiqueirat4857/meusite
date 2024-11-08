//1
const meuTitulo = document.getElementById("titulo")
meuTitulo.style.backgroundColor = "blue"
//2
const meuSubtitulo = document.getElementsByClassName("subtitulo")
meuSubtitulo[0].style.fontSize = "20px"
//3
const minhaDiv = document.querySelector(".criaParagrafo")
const novoParagrafo = document.createElement("p")
novoParagrafo.textContent = "Novo parágrafo adicionado!"
minhaDiv.appendChild(novoParagrafo)
//4
const meusSubstitulos = document.querySelectorAll(".subtitulo")
meusSubstitulos[0].remove()
