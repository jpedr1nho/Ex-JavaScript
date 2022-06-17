let valor1, valor2, valor3, valorf;

alert("Vamos saber a soma dos dois maiores valores entre os três");

valor1 = parseFloat(prompt("Informe um valor:"));
valor2 = parseFloat(prompt("Informe outro valor"));
valor3 = parseFloat(prompt("Informe o último valor"));

if ((valor1 == valor2) || (valor1 == valor3) || (valor2 == valor3)){
    alert("Informe valores diferentes")
}else if ((valor1 > valor2) && (valor2 < valor3)){
    valorf = valor1+valor3
    alert("Os valores maiores são "+valor1+" e "+valor3)
    alert("O valor da soma dos dois maiores números é:"+valorf)
}else if ((valor1>valor3) && (valor3<valor2)){
    valorf = valor1+valor2
    alert("Os valores maiores são "+valor1+" e "+valor2)
    alert("O valor da soma dos dois maiores números é:"+valorf)
}else{
    valorf = valor2+valor3
    alert("Os valores maiores são "+valor2+" e "+valor3)
    alert("O valor da soma dos dois maiores números é:"+valorf)
}