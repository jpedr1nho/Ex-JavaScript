let cdf, valor, valord, valori, pdd, imp;

alert("Calcule aqui os valores do seu carro novo");

cdf=parseInt(prompt("Qual o valor do custo de fábrica do seu carro?"));
pdd=parseInt(prompt("Qual a porcentagem do distribuidor?"));
imp=parseInt(prompt("Qual a porcentagem de impostos?"));

valord=((cdf*pdd)/100);
valori=((cdf*imp)/100);
valor=(cdf+valord+valori);

alert("O valor do carro é: "+valor+"R$");