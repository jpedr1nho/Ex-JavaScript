let salfixo, valvendas,comissao,salfinal;

alert("Vamos saber quanto foi seu sálario final com seu total de vendas")
    
salfixo=parseInt(prompt("Digite seu salario fixo: "));
valvendas=parseInt(prompt("Digite o valor das vendas: "));
    
if(valvendas <= 1500) {
        comissao = valvendas * 0.03;
        salfinal= salfixo + comissao;
       alert("Seu salario será:"+ salfinal)
}else{
        comissao = valvendas * 0.05;
        salfinal= salfixo + comissao;
        alert("Seu salario será: "+salfinal)
}