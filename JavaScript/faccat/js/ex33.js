let  valor1, valor2;

alert("Vamos saber se seus valores são iguais ou qual deles é maior")

valor1 = parseFloat(prompt("Digite um valor"));
valor2 = parseFloat(prompt("Digite outro valor"));

if (valor1 == valor2){
    alert("Seus números são iguais")
}else if(valor1 > valor2){
    alert("O número "+valor1+" é o maior")
}else{
    alert("O número "+valor2+" é o maior")   
}