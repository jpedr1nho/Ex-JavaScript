let time1, time2, gols1, gols2;

alert("Vamos ver qual time venceu o jogo ou se deu empate");

time1 = prompt("Digite o nome do time")
time2 = prompt("Digite o nome do time adversário")

gols1 = parseInt(prompt("Quantos gols marcados o "+time1+" fez?"))
gols2 = parseInt(prompt("Quantos gols marcados o "+time2+" fez?"))

if (gols1 == gols2){
    alert("Nesse jogo entre "+time1+" e "+time2+", deu EMPATE!")
} else if (gols1>gols2){
    alert("Nesse jogo entre "+time1+" e "+time2+", o VENCEDOR foi "+time1+"!")
}else{
    alert("Nesse jogo entre "+time1+" e "+time2+", o VENCEDOR foi "+time2+"!")
}