let cotacao, reais, convertido;

alert("Converta o dolar para o real");

cotacao = parseFloat(prompt("Qual o valor da cotação do dólar?"));
reais = parseFloat(prompt("Qual quantidade de dólares disponíveis?"));

convertido = reais/cotacao

alert("O valor convertido para reais ficou:"+convertido)