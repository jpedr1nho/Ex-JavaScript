let numero, contadora, resultado;

alert("Vamos fazer a tabuada do 1 ao 10 do seu número");

numero = parseInt(prompt("Digite um número inteiro"));

contadora = 1

while (contadora < 11) {
    resultado = numero * contadora;
    alert(numero + " x " + contadora + " = " + resultado);
    contadora = contadora + 1;
}