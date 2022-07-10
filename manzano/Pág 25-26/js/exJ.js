let cotacao, dolar, convertido;

alert("Converta o dolar para o real");

cotacao = parseFloat(prompt("Qual o valor da cotação do dólar?"));
dolar = parseFloat(prompt("Qual quantidade de dólares disponíveis?"));

convertido = dolar*cotacao

alert("O valor convertido para reais ficou:"+convertido)