let num1, num2,num3;

alert("Vamos saber a soma dos dois maiores valores entre os três");

num1=parseInt(prompt("Informe o primeiro numero: "));
num2=parseInt(prompt("Informe o segundo numero: "));
num3=parseInt(prompt("Informe o terceiro numero: "));


if (num1 > num2 && num1 > num3){
    if (num2 > num3){
        alert("A Ordem é "+num3+", "+num2+", "+num1);
    }else{
        alert("A Ordem é "+num2+", "+num3+", "+num1);
    } 
}else if (num2 > num1 && num2 > num3) {
    if (num3 > num1){
        alert("A Ordem é "+num1+", "+num3+", "+num2);
    }else{
        alert("A Ordem é "+num3+", "+num1+", "+num2);
    }
}else if (num3 > num1 && num3 > num2) {
    if (num1 > num2){
        alert("A Ordem é "+num2+", "+num1+", "+num3);
    }else{
        alert("A Ordem é "+num1+", "+num2+", "+num3);
    }
}