let hora1, hora2, valor1, valor2;

alert("Calcule a duração do jogo em horas")

hora1=parseInt(prompt("Indique somente a HORA que 'começou' sua partida de xadrez:"))
hora2=parseInt(prompt("Indique somente a HORA que 'terminou' sua partida de xadrez:"))

valor1=hora1-hora2

if(valor1>0){
    alert("A partida de Xadrez durou: "+valor1)
}else{
    valor2<-(valor1)+24
    alert("A partida de Xadrez durou: "+valor1)
}