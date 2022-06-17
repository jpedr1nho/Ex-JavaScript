let total, validos, brancos, nulos, v_validos, v_nulos, v_brancos;

alert("Vamos calcular os votos!!");

validos=parseInt(prompt("Digite os votos validos:"));
brancos=parseInt(prompt("Digite os votos brancos:"));
nulos=parseInt(prompt("Digite os votos nulos"));

total=(validos+brancos+nulos);
v_validos=(validos*100)/total;
v_brancos=(brancos*100)/total;
v_nulos=(nulos*100)/total;

alert("a porcentagem de votos validos foi "+v_validos+"%")
alert(" a porcentagem de votos brancos foi "+v_brancos+"%")
alert(" a porcentagem de votos nulos foi "+v_nulos+"%")