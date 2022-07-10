let sm, pr, ns1, ns2, ns3;

alert("Vamos saber o percentual de reajuste do seu salário");

sm = parseFloat(prompt("Digite o seu salário atual"));
pr = parseFloat(prompt("Qual o seu percentual de reajuste"));

ns1 = pr*sm
ns2 = ns1/100
ns3 = sm+ns2

alert("O seu novo salário com o reajuste aplicado é de:"+ns3+"R$");