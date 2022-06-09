var videoGames = ['Switch', 'ps4', 'Xbox'];

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; //


for (var numero = 0; numero < 10; numero++) {
  var comp =  numero % 2 ;
  if(comp == 0){
  console.log(numero);
  }  
 } // retorna os numeros pares 

 var i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
// Retorna de 0 a 9 no console


for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
 }// mostra todos os dados do array videoGames


for (var i = 0; i < videoGames.length; i++) {
 console.log(videoGames[i]);
 if(videoGames[i] === 'PS4') {
 break;//  força o fim do loop
 }
}


videoGames.forEach(function(item) {
 console.log(item);
});
// Forma mais simples de trabalhar com array e loops