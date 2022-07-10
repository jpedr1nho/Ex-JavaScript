let validosa, validosb, validosc, brancos, nulos, totalv, total, validosg, vla, vlb, vlc, vbc, vnl;

alert("Vamos saber os percentuais da eleição");

validosa = parseFloat(prompt("Quantidade de votos válidos para o candidato A"));
validosb = parseFloat(prompt("Quantidade de votos válidos para o candidato B"));
validosc = parseFloat(prompt("Quantidade de votos válidos para o candidato C"));

brancos = parseFloat(prompt("Digite o total de votos brancos"));
nulos = parseFloat(prompt("Digite o total de votos nulos"));

totalv = validosa+validosb+validosc
total = validosa+validosb+validosc+brancos+nulos

alert("O número total de eleitores: "+total);

validosg = totalv*100/total

alert("Percentual de votos válidos: "+validosg+"%");

vla = validosa*100/total
vlb = validosb*100/total
vlc = validosc*100/total
vbc = brancos*100/total
vnl = nulos*100/total

alert("Percentual de votos válidos do candidato A: "+vla+"%");
alert("Percentual de votos válidos do candidato B: "+vlb+"%");
alert("Percentual de votos válidos do candidato C: "+vlc+"%");

alert("Percentual de votos brancos: "+vbc+"%");
alert("Percentual de votos nulos: "+vnl+"%");