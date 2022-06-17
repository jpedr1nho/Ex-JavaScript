let qtd_md ,qtdestoque, qtdmaxima, qtdminima, qtdatual;

alert("Saiba se você precisa ou não comprar mais de tal produto")

qtdestoque=parseInt(prompt("Digite a quantidadede em estoque: "));
qtdmaxima=parseInt(prompt("Digite a capacidade total do estoque: "));
qtdminima=parseInt(prompt("Digite a capacidade minima: "));
    
qtd_md = ((qtdmaxima + qtdminima)/2)
    
if (qtdestoque >= qtd_md) {
    alert("Não efetue a compra")
} else {
    alert("Efetue a compra")
}
