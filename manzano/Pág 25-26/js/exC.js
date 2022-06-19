let diam, altu, r, vol1, vol2;

alert("Vamos descobrir o volume da sua lata");

diam = parseFloat(prompt("Qual o diâmetro da sua lata?"))
altu = parseFloat(prompt("Qual a altura da sua lata?"))

r = (diam/2)
vol1 = (3.14159*altu)
vol2 = ((r*r) + vol1)

alert("O volume da sua lata é de:"+vol2+"cm³")