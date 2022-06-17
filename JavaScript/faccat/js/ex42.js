alert("Saiba se o empregado está ou não apto a requerer aposentadoria")

let RmEmpresa = parseInt(prompt("Digite o RM da empresa: "));
let anoNasc = parseInt(prompt("Digite o ano de seu nascimento: "));
let anoAtual = parseInt(prompt("Digite o ano em que estamos: "));
let entroEmpresa = parseInt(prompt("Digite o ano que entrou na empresa: "));

let tempoEmpresa = anoAtual - entroEmpresa;
let idade = anoAtual - anoNasc;

if (idade >= 65) {
    alert("O funcionario "+RmEmpresa+" ja pode Requerer aposentadoria");
} else if (tempoEmpresa >= 30) {
    alert("O funcionario "+RmEmpresa+" ja pode Requerer aposentadoria");
} else if (idade >= 60 && tempoEmpresa >= 25) {
    alert("O funcionario "+RmEmpresa+" ja pode Requerer aposentadoria")
} else {
    alert("O funcionario "+RmEmpresa+"ainda não pode requerer");
}