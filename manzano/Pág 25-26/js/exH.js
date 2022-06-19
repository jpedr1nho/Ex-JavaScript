let volume, comprimento, largura, altura;

alert("Vamos saber o volume de uma caixa retangular");

comprimento = parseFloat(prompt("Informe o valor do comprimento da caixa"))
largura = parseFloat(prompt("Informe o valor da largura da caixa"))
altura = parseFloat(prompt("Informe o valor da altura da caixa"))

volume = (comprimento*largura*altura)

alert("O volume da sua caixa é de:"+volume+"cm³")