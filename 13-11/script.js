const img = document.querySelectorAll('.pequeno')

const botao = document.getElementById('botao')

function mudaClasse () {

if (img[0].classList==='pequeno') {

    img[0].classList.remove('grande')  
    img[0].classList.remove('pequeno')  

} else {  

img[0].classList.toggle('pequeno') 

img[0].classList.remove('grande') 

}
}


botao.addEventListener('click',mudaClasse)

const img2 = document.getElementById('imagem2')
const botao2 = document.getElementById('botao2')

function mudaClasse2 () {
    img2.classList.toggle('desativado')
}

botao2.addEventListener('click',mudaClasse2)

































