let valor;

alert("Vamos saber se seu número é positivo ou negativo?")

valor=parseInt(prompt("Digite um valor:"))

if(valor<0){
    alert("É negativo!")
}else if(valor==0){
    alert("Esse valor é neutro")
}else{
    alert("É positivo")
}