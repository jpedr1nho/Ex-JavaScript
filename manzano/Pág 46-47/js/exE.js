let potencia = 0, resultado, i;

alert("Vamos saber a os resultados das potências de 3");

while (potencia <= 15) {
    resultado = 3
    i = 2
    if (potencia == 0) {
        resultado = 1;
    } else if (potencia == 1) {
        resultado = 3;
    } else {
        while (i <= potencia) {
            resultado = resultado * 3
            i++
        }
    }
    alert("3^" + potencia + " = " + resultado)
    potencia++
}