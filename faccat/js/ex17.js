let n1, n2, notafinal, nota;

alert("Vamos ver se você foi aprovado ou reprovado?")

n1=parseInt(prompt("Digite sua primeira nota (0 a 10)"))
n2=parseInt(prompt("Digite sua segunda nota (0 a 10)"))

nota=n1+n2
notafinal=nota/2

if(notafinal>=6){
    alert("Parábens você foi aprovado!! Sua nota foi: "+notafinal)
}else{
    alert("Infelizmente você foi reprovado!! Sua nota foi: "+notafinal)
}