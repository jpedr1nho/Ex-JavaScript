let totMorango, totMaca, valCompra, valFinal, morangoKg, macaKg, totQuilos

alert("Vamos saber quanto você vai pagar nessa barraca")

morangoKg = parseInt(prompt("Digite o valor em Kg de Morangos comprados:"));
macaKg = parseInt(prompt("Digite o valor em Kg de Maças compradas:"));


totQuilos = morangoKg + macaKg
// Morango
if (morangoKg <= 5) {
    totMorango = morangoKg * 2.5
} else if (morangoKg > 5) {
    totMorango = morangoKg * 2.2
}

// MAÇAS
if (macaKg <= 5) {
    totMaca = macaKg * 1.8
} else if (macaKg > 5) {
    totMaca = macaKg * 1.5
}

valCompra = totMorango + totMaca;

if (totQuilos > 8 || valCompra > 25) {
    valFinal = valCompra - (valCompra * 10 / 100);
    alert("O valor total que o cliente irá pagar é: R$"+valFinal.toFixed(2));
} else {
    alert("O valor total que o cliente irá pagar é: R$"+valCompra.toFixed(2));
}