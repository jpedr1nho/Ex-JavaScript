let a,b,c,mens;

alert("Faça um teste de mesa e complete o quadro");

a=parseInt(prompt("Digite o valor:"));
b=parseInt(prompt("Digite o valor:"));
c=parseInt(prompt("Digite o valor:"));


if ((a < b+c) && (b < a+c) && (c <a+b) ) {
    if ((a==b) && (b==c)) {
        mens = "triângulo Equilátero"
        alert("Esse é um "+mens);
    } else if ((a==b) || (b==c) || (a==c)) {
        mens = "triângulo Isósceles"
        alert("Esse é um "+mens);
    } else {
        mens = "triângulo Escaleno"
        alert("Esse é um "+mens);
    }
} else{
    mens = "Não e possível formar um triângulo"
    alert(mens);
}   