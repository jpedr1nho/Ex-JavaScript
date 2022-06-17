let anos, meses, dias, idade;

anos=parseInt(prompt("Digite seus anos completos de vida:"))
meses=parseInt(prompt("Digite seus meses completos de vida:"))
dias=parseInt(prompt("Digite seus dias completos de vida:"))

idade=(anos*365)+(meses*30)+dias

alert("Seus dias de vida são: "+idade)