let a, b, c, d, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10, valor11, valor12;

alert("Vamos saber as somas e as multiplicações de quatro valores");

a = parseInt(prompt("Digite o valor de A"));
b = parseInt(prompt("Digite o valor de B"));
c = parseInt(prompt("Digite o valor de C"));
d = parseInt(prompt("Digite o valor de D"));

// Somas

valor1 = a+b        
valor2 = a+c
valor3 = a+d
valor4 = b+c
valor5 = b+d
valor6 = c+d

// Multiplicações

valor7 = a*b
valor8 = a*c
valor9 = a*d
valor10 = b*c
valor11 = b*d
valor12 = c*d

alert("Somas:");

alert("Soma 1: "+valor1);
alert("Soma 2: "+valor2);
alert("Soma 3: "+valor3);
alert("Soma 4: "+valor4);
alert("Soma 5: "+valor5);
alert("Soma 6: "+valor6);

alert("Multiplicações:");

alert("Multiplicação 1: "+valor7);
alert("Multiplicação 2: "+valor8);
alert("Multiplicação 3: "+valor9);
alert("Multiplicação 4: "+valor10);
alert("Multiplicação 5: "+valor11);
alert("Multiplicação 6: "+valor12);