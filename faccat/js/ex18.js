let nasc, atual, votar;

alert("Veja se você está apto a votar esse ano")

nasc=parseInt(prompt("Que ano você nasceu?"))
atual=parseInt(prompt("Que ano estamos?"))

votar=atual-nasc

if(votar>=16){
    alert("- Você está apto a votar! Faça seu título de eleitor.")
}else{
    alert("- Você não está apto a votar! Espere mais um pouco.")
}