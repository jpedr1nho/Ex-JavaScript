let valor1, valor2, valor3, soma1, soma2, soma3;

alert("Vamos saber se seus valores formam ou não um triângulo");

valor1 = parseFloat(prompt("Digite o valor do lado A"));
valor2 = parseFloat(prompt("Digite o valor do lado B"));
valor3 = parseFloat(prompt("Digite o valor do lado C"));

soma1 = valor1+valor2
soma2 = valor1+valor3
soma3 = valor2+valor3

if ((valor1>soma3) || (valor2>soma2) || (valor3>soma1)){
    alert("Esses três valores não formam um triângulo")
}else{
    alert("Esses três valores formam um triâgulo")
}