let a, b, mediador;

alert("Vamos trocar os valores");

a = parseFloat(prompt("Digite o valor de A"))
b = parseFloat(prompt("Digite o valor de B"))

mediador = a
a = b
b = mediador

alert("O valor de A: "+a)
alert("O valor de B: "+b)