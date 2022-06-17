let valor;

alert("Vamos saber se seu valor é positivo, negativo ou zero")

valor = parseInt(prompt("Digite um valor:"))

if (valor < 0){
    alert("O numero digitado é negativo")
}else if (valor == 0){
    alert("O numero digitado é zero")
}else{
    alert("O numero digitado é positivo")
}