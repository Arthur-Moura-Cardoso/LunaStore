const botao = document.querySelector(".menu_hamburguer")
const lista = document.querySelector(".lista_mobile")

botao.addEventListener('click', (evento) => {
    lista.classList.toggle("ativo")
})