let num1, num2

alert("Descubra qual é o menor valor")

num1=parseInt(prompt("Digite o primeiro número"))
num2=parseInt(prompt("Digite o segundo número"))

if(num1==num2){
    alert("Por favor, insira números diferentes!!")
}else if(num1<num2){
    alert("O número "+num1+" é MENOR que o "+num2)
}else{
    alert("O número "+num2+" é MENOR que o "+num1)
}