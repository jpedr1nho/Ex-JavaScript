let num1, num2, num3;

alert("Vamos saber o maior dentre os seus númer0");

num1 = parseInt(prompt("Informe o primeiro número:"));
num2 = parseInt(prompt("Informe o segundo número:"));
num3 = parseInt(prompt("Informe o terceiro número:"));

if (num1 > num2 && num1 > num3) {
    alert("O maior número é "+num1)
} else if (num2 > num1 && num2 > num3) {
    alert("O maior número é "+num2)
} else {
    alert("O maior número é "+num3)
}