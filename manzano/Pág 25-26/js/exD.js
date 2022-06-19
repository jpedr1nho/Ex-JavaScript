let tempo, velo, dista, litros;

alert("Qual será quantidade de litros de combustível gastas nessa viagem");

tempo = parseFloat(prompt("Quanto tempo vai ser gasto no trajeto?"))
velo = parseFloat(prompt("Qual a velocidade média durante a viagem?"))

dista = tempo*velo
litros = dista/12

alert("A sua velocidade média foi de: "+velo)
alert("Seu tempo gasto na viagem: "+tempo)
alert("Sua distancia percorrida na viagem: "+dista)
alert("Sua quantidade de litros usados: "+litros)
