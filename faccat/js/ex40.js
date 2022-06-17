let nome, quantidade, precoUnidade, desconto, totalPagar;

alert("Calcule o desconto do seu produto adquirido")

nome = prompt("Nome do produto: ")
quantidade = parseInt(prompt("Quantidade adquirida: "))
precoUnidade = parseFloat(prompt("Preço unitário: "))

totalPagar = quantidade * precoUnidade

if (quantidade <= 5) {
    desconto = 0.02
} else if ((quantidade > 5) && (quantidade <= 10)) {
    desconto = 0.03
} else {
    desconto = 0.05
}

totalPagar = totalPagar - (totalPagar * desconto)

alert("Produto: " + nome + " | Quantidade: " + quantidade + " | Desconto: " + desconto + "% | Total a pagar: R$" + totalPagar)