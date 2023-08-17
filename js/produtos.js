    //Botão de quantidade
    var input = document.querySelector(".quantidade_valor")
    var controle = document.querySelectorAll(".quantidade_controle")
    var quantidadeProdutos = document.querySelector(".roxo")
    
    controle.forEach( (botao) => {
        botao.addEventListener('click', (evento) => {
            let valorInput = parseInt(input.value)
            let valorMaximo = parseInt(quantidadeProdutos.textContent)

            mudaValor(evento.target.textContent, valorInput, valorMaximo)
        })
    });

    function mudaValor(operacao, valor, valorMaximo) {
        if(operacao === "-"){
            if(valor > 0){
                input.value--
                quantidadeProdutos.textContent = `${valorMaximo + 1} itens`
            }
        }else if(operacao === "+") {
            if(valor < valorMaximo){
                input.value++                
                quantidadeProdutos.textContent = `${valorMaximo - 1} itens`
            }
        }

    }

    //mini imagens
    var imagem = document.querySelector(".imagem_produto")
    var miniImagens = document.querySelectorAll(".mini_imagem-produto")

    miniImagens.forEach(mini => {
        mini.addEventListener('click', (evento) => {
            let novaImagem = mini.getAttribute("src")
            mudarImagem(novaImagem)
        })
    })

    function mudarImagem(url) {
        imagem.setAttribute("src", url)
    }


    //carrinho de compras
    var carrinho = document.querySelector(".carrinho_contador")
    var add = document.querySelector(".botao_carrinho")
    
        add.onclick = (evento) => {
            let produtos = parseInt(input.value)

            carrinho.innerText = produtos

            if(produtos === 0){
                carrinho.style.opacity = "0"
            }else {
                carrinho.style.opacity = "1"
            }
        }    
        
        //Carta de produtos    
    var card = document.querySelectorAll(".card")
    card.forEach(carta => {
        carta.addEventListener('click',  (evento) => {
            abrir()
        } )
    });
    function abrir() {
        window.open("#")
    }