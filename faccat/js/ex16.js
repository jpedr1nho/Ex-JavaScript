let valor, macas;

alert("Quanto você vai pagar nessa promoção das maçãs")

macas=parseInt(prompt("Quantas maçãs você comprou?"))

if(macas<12){
    valor=macas*1.3
    alert("O valor será "+valor+"R$")
}else{
    valor=macas*1.0
    alert("O valor será "+valor+"R$")
}