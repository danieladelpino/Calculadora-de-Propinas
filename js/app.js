function calcularPropina(monto, porcentaje) {
    return monto * (porcentaje / 100);
}

let monto = Number(prompt('Ingrese el monto total: '));


if (monto > 0) {
  let porcentajeValido = false;

  do {
    porcentaje = Number(prompt('Ingrese un porcentaje: (10 al 100)'));

    if (porcentaje >= 10 && porcentaje <= 100) {
      porcentajeValido = true;
    } else {
      alert("Por favor, ingrese un valor numérico válido para el porcentaje de propina entre 10 y 100.");
    }
  } while (!porcentajeValido);

  let propina = calcularPropina(monto, porcentaje);
  totalPropina = monto + propina;

  alert("El monto total a pagar, incluyendo la propina, es de: $" + totalPropina);
} else {
  alert("Por favor, ingrese un valor numérico válido para el monto total de la cuenta.");
}