let login = 1234;

alert("Faça o seu login");

let usuario = parseInt(prompt("Digite seu usuario: "));

if (usuario != login) {
    alert("Usuário inválido!");
} else {
    let senha = parseInt(prompt("Digite a senha:"));
    if (senha != 9999) {
        alert("Senha incorreta");

    } else {
        alert("Acesso permitido");
    }
}