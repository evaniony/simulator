
let solicitar = parseInt(prompt("Ingresa monto a solicitar: "));
let solicitar2 = parseInt(prompt("Ingresa cuantas cuotas: "));

const interes = x => x * 0.18;


let fn = parseInt(((interes(solicitar)*solicitar2)/12));
console.log(fn);

let total = parseInt(((fn + solicitar)/ solicitar2));
parseInt(alert("A pagar durante " + solicitar2 + " meses: \n " + "$"+ total + " por mes."));
;