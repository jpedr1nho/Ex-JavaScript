let sexo, pesoi, altura, nome;

alert("Vamos ver o seu peso ideal de acordo com os seus dados.")

nome = prompt("Digite o seu nome:")

alert("É um prazer conhecer você, "+nome)

sexo = prompt("Digite o seu sexo, sendo 'M' para masculino e 'F' para feminino:")
altura = parseFloat(prompt("Digite aqui a sua altura:"))  

if(sexo == "M") {
    pesoi = (72.7 * altura) - 58
    alert("Seu peso ideial é: "+pesoi+" Kg")
}else if(sexo == "F") {
    pesoi = (62.1 * altura) - 44.7
    alert("Seu peso ideial é: "+pesoi+" Kg")
}else{
    alert("Informe seu sexo corretamente")
}