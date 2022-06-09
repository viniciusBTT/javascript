// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var casa = false;
var carro = true;

var darCredito = (casa && carro);

if(darCredito)
  console.log("credito liberado")
else
  console.log("credito não liberado")
