function areaQuadrado(lado){ 
  return lado * lado;
}

console.log(areaQuadrado(55));

/////////////////////////////////////////////////////////////////

function pi () {
  return 3.14;
}

var toral = 5 * pi();

console.log(toral + '   pi')
/////////////////////////////////////////////////////////////////
function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc( 20 , 1.80))

/////////////////////////////////////////////////////////////////
function corFavorita (cor){
  switch(cor){
    case 'verde':
      console.log('é verde');
      break  
    case 'amarelo':
      console.log('amarelo');
      break
    case 'vermelho':
      console.log('vermelho')
      break
  }
}
/////////////////////////////////////////////////////////////////
function olaMerdinha(){
  console.log('ola Merdinha');
}
addEventListener('click', olaMerdinha);

/////////////////////////////////////////////////////////////////


function imc2 (peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
 }
 imc2(80, 2); // retorna o imc
 console.log(imc2(20, 5))
 
/////////////////////////////////////////////////////////////////

 function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
  return 'Informe a sua idade!';
  } else if(idade >= 60) {
  return true;
  } else {
  return false;
  }  
 }
 console.log(terceiraIdade(99))

 /////////////////////////////////////////////////////////////////

 function faltaVisitar(paisesVisitados){
   var totalPaises = 193;
   return `Falta visitar ${totalPaises - paisesVisitados} paises`
 }



 /////////////////////////////////////////////////////////////////

 var profissao = 'Designer';

function dados() {
  var nome = 'Pedro';
  var idade = 50;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
  
}
console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
