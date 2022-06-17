let salarioh, horae, salarioe, salariof, horat;

alert("Vamos ver quanto você vai receber de salário esse mês?")

salarioh = parseInt(prompt("Qual é o seu salário por hora trabalhada:"))
horat = parseInt(prompt("Quantas horas você trabalhou no mês:"))

if (horat > 160) {
    horae=horat-160
    salarioe=50/100*salarioh*horae
    alert("Você trabalhou "+horae+" horas a mais, então seu salário extra é R$"+salarioe)
    salariof=horat*salarioh
    alert("Seu salário do mês é: R$"+salariof)
}else{
    salariof=horat*salarioh
    alert("Seu salário do mês é: R$"+salariof)
}