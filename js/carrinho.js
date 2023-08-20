const nome = document.querySelector(".nome_produto")
const preco = document.querySelector(".preço_produto")
const imagem = document.querySelector(".imgProduto")
const quantidade = document.querySelector(".quantidade_text")

var nome_produto = localStorage.getItem("nome_produto")
var valor_produto = localStorage.getItem("valor_produto")
var imagem_produto = localStorage.getItem("imagem_produto")
var quantidade_produto = localStorage.getItem('quantidade_produto')

nome.textContent = nome_produto
preco.textContent = valor_produto
imagem.setAttribute("src", imagem_produto)
quantidade.textContent = quantidade_produto