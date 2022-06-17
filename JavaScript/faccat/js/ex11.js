let ncv, tvc, sfx, css, sfl;

alert("Calcule o seu salário final")

sfx=parseInt(prompt("Salário fixo:"))
tvc=parseInt(prompt("Total de vendas:"))
ncv=parseInt(prompt("Número de carros vendidos:"))
css=parseInt(prompt("Comissão em reais:"))

sfl=(ncv*css)+(tvc*5/100)+sfx

alert("Salário final: "+sfl+"R$")