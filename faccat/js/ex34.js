let x, y, z;

alert("Faça o teste de mesa");

x = parseFloat(prompt("Digite valor X"))
y = parseFloat(prompt("Digite Valor Y"))

z = (x*y)+5

if (z<=0){ 
    alert("A resposta é 'A'")
} else if (z<=100){
    alert("A resposta é 'B'")
} else{
    alert("A resposta é 'C'")
}