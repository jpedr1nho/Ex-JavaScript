let salario, percentual, calculo1, resultado

alert("Calcule o seu reajuste no seu salário")

salario=parseInt(prompt("Digite o valor do seu salário atual"))
percentual=parseInt(prompt("Digite o percentual do reajuste no seu salário"))

calculo1=(percentual/100)*salario

alert("O reajuste é de "+calculo1+"R$")

resultado=calculo1+salario

alert("Seu novo salário é "+resultado+"R$")