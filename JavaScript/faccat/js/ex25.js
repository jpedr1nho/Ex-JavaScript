let nconta, saldo, debito, credito, saldoa;

alert("Vamos saber como anda o seu saldo atual");

nconta = parseInt(prompt("Informe o número de sua conta"));

saldo = parseInt(prompt("Informe o saldo da conta "+nconta));
debito = parseInt(prompt("Informe o débito da conta "+nconta));    
credito = parseInt(prompt("Informe o crédito da conta "+nconta));

saldoa = saldo - debito + credito;

if (saldoa > 0){
    alert("Sua conta está com o saldo positivo, seu saldo é de R$"+saldoa)
}else if (saldoa < 0){
    alert("Sua conta está com o saldo negativo, seu saldo é de R$"+saldoa)
}else{
    alert("Sua conta está sem saldo, seu saldo é de R$"+saldoa)
}