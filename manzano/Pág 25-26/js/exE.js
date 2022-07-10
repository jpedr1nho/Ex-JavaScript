let vari1, vari2, vari3, vari4;

alert("Vamos ver o valor da prestação");

vari1 = parseFloat(prompt("Valor da dívida:"));
vari2 = parseFloat(prompt("Taxa em porcentagem:"));
vari3 = parseFloat(prompt("Tempo de dívida:"));

vari4 = (vari1+(vari1*vari2/100)*vari3);

alert("Sua dívida está avaliada em: "+vari4+"R$");