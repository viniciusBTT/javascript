// Crie uma função para verificar se um valor é Truthy
function Truthy(valor){  
    console.log(!!valor)  
}
Truthy('ola')
// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
function area(lado){
  var area = lado * 4;
  console.log('O perimetro é ' + area)
}
area(5)
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("vinicius", "barros"))

// Crie uma função que verifica se um número é par
function impar(valor){
  valor = valor % 2;
  if(valor == 1){
    return `Numero Impar`
  }else{
    return `Numero par`
  }
}
console.log(impar(25))


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(argumento){
  return typeof argumento;
}
console.log(tipo('ola'));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer
addEventListener('click' , function(){console.log('Vinicius barros')});


//corrija o erro a baixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
 }
 function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises}`;
 }
 console.log(precisoVisitar(20));
 console.log(jaVisitei(20));