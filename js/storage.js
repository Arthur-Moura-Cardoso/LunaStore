const add_carrinho = document.querySelector(".botao_carrinho")
var imagem_produto = document.querySelector(".imagem_produto")
var quantidade_produto = document.querySelector(".quantidade_valor")
var produto_valor = document.querySelector(".valor")
var produto_nome = document.querySelector(".produto_nome")

add_carrinho.addEventListener("click", ()=>{
    if(quantidade_produto.dataset.quantidade != 0){
        localStorage.setItem("imagem_produto", imagem_produto.getAttribute("src"))
        localStorage.setItem("nome_produto", produto_nome.innerText)
        localStorage.setItem("valor_produto", produto_valor.innerText)
        localStorage.setItem("quantidade_produto", quantidade_produto.dataset.quantidade)
    }else {
        localStorage.setItem("imagem_produto", "")
        localStorage.setItem("nome_produto", "")
        localStorage.setItem("valor_produto", "")
        localStorage.setItem("quantidade_produto", "")
    }
})

